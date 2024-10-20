const INVALID_ARGUMENT = 'INVALID_ARGUMENT';
const sort = (inputString: any): string => {
  if (typeof inputString !== 'string') {
    throw new Error(INVALID_ARGUMENT);
  }
  const words = inputString.toLowerCase().split(' ');
  const sortedWords = words
    .map((word) => word.split('').sort().join(''))
    .sort((a, b) => a.length - b.length)
    .join(' ');

  return sortedWords;
};

export default sort;
