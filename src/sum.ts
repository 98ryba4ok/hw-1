const INVALID_ARGUMENT = 'INVALID_ARGUMENT';

const INVALID_ARGUMENTS_COUNT = 'INVALID_ARGUMENTS_COUNT';

const sum = (...inputArray: any[]): number => {
  if (inputArray.length < 2) {
    throw new Error(INVALID_ARGUMENTS_COUNT);
  }

  for (let i = 0; i < inputArray.length; i++) {
    if (typeof inputArray[i] !== 'number') {
      throw new Error(INVALID_ARGUMENT);
    }
  }

  return inputArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue,

    0
  );
};

export default sum;
