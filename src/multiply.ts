const INVALID_ARGUMENT = 'INVALID_ARGUMENT';
const multiply = (firstNumber: any) => {
  if (typeof firstNumber !== 'number') {
    throw new Error(INVALID_ARGUMENT);
  }
  return (secondNumber: any) => {
    if (typeof secondNumber !== 'number') {
      throw new Error(INVALID_ARGUMENT);
    }
    return firstNumber * secondNumber;
  };
};

export default multiply;
