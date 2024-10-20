const INVALID_ARGUMENT = 'INVALID_ARGUMENT';
const INVALID_ELEMENT_IN_ARRAY = 'INVALID_ELEMENT_IN_ARRAY';
const removeAnagrams = (inputArray: any[]) => {
  if (!Array.isArray(inputArray)) {
    throw new Error(INVALID_ARGUMENT);
  }
  for (const item of inputArray) {
    if (typeof item !== 'string') {
      throw new Error(INVALID_ELEMENT_IN_ARRAY);
    }
  }
  const sortedString = (str: string) => str.split('').sort().join('');
  const anagramCount = new Map<string, number>();

  for (const word of inputArray) {
    const sortedWord = sortedString(word);
    anagramCount.set(sortedWord, (anagramCount.get(sortedWord) || 0) + 1);
  }
  const result: string[] = [];
  for (const word of inputArray) {
    const sortedWord = sortedString(word);
    if (anagramCount.get(sortedWord) === 1) {
      result.push(word);
    }
  }

  return result;
};

export default removeAnagrams;
