const INVALID_ARGUMENTS_COUNT = 'INVALID_ARGUMENTS_COUNT';
const INVALID_ARGUMENT = 'INVALID_ARGUMENT';
const INVALID_ELEMENT_IN_ARRAY = 'INVALID_ELEMENT_IN_ARRAY';
const intersection = (firstArray: any, secondArray?: any): number[] => {
  if (firstArray === undefined || secondArray === undefined) {
    throw new Error(INVALID_ARGUMENTS_COUNT);
  }
  if (!Array.isArray(firstArray) || !Array.isArray(secondArray)) {
    throw new Error(INVALID_ARGUMENT);
  }
  function checkArrray(inputArray: any[]) {
    for (const i of inputArray) {
      if (typeof i !== 'number') {
        throw new Error(INVALID_ELEMENT_IN_ARRAY);
      }
    }
  }
  checkArrray(firstArray);
  checkArrray(secondArray);
  const result = firstArray.filter((num) => secondArray.includes(num));
  return Array.from(new Set(result));
};

export default intersection;
