const INVALID_ARGUMENT = 'INVALID_ARGUMENT';
const getNumberProps = (inputObject: any): string[] => {
  if (
    typeof inputObject !== 'object' ||
    inputObject === null ||
    Array.isArray(inputObject)
  ) {
    throw new Error(INVALID_ARGUMENT);
  }
  const collectKeys = (obj: any, result: string[] = []): string[] => {
    const keys = Object.keys(obj);

    for (const key of keys) {
      const value = obj[key];

      if (typeof value === 'number') {
        result.push(key);
      }
      if (
        typeof value === 'object' &&
        value !== null &&
        !Array.isArray(value)
      ) {
        collectKeys(value, result);
      }
    }

    return result;
  };

  return collectKeys(inputObject).sort();
};

export default getNumberProps;
