type FunctionType<T> = () => Promise<T> | T;
const INVALID_ARGUMENT = 'INVALID_ARGUMENT';
// Получить из массива функций перечисление результатов их вызовов
// (в случае возврата промиса учитывается именно результат промиса)
type FunctionResultsUnion<
  T extends FunctionType<any>[] | Readonly<FunctionType<any>[]>
> = {
  [K in keyof T]: Awaited<ReturnType<T[K]>>;
}[number];

const promiseFrame = async <
  T extends FunctionType<any>[] | Readonly<FunctionType<any>[]>,
  ResultsT = FunctionResultsUnion<T>
>(
  functions: T,
  limit?: number
): Promise<ResultsT[]> => {
  if (!Array.isArray(functions) || (limit !== undefined && limit <= 0)) {
    throw new Error(INVALID_ARGUMENT);
  }

  return new Promise((resolve, reject) => {
    const funcQueue = functions.map((func, index) => ({ index, func }));
    const results: ResultsT[] = [];
    let executedCount = 0;

    const processNext = async () => {
      const curFuncObj = funcQueue.shift();
      if (!curFuncObj) {
        return;
      }

      try {
        const { func, index } = curFuncObj;
        results[index] = await func();
        executedCount++;

        if (executedCount === functions.length) {
          return resolve(results);
        }

        processNext();
      } catch (error) {
        reject(error);
      }
    };

    for (let i = 0; i < (limit || functions.length); i++) {
      processNext();
    }
  });
};

export default promiseFrame;
