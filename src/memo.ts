const INVALID_ARGUMENT = 'INVALID_ARGUMENT';

type CacheEntry<T> = {
  result: T;
  timeoutId?: NodeJS.Timeout;
};

const memo = <T extends (...args: any[]) => any>(
  func: T,
  time?: number
): ((...args: Parameters<T>) => ReturnType<T>) => {
  if (typeof func !== 'function') {
    throw new Error(INVALID_ARGUMENT);
  }
  if (time !== undefined && (typeof time !== 'number' || time < 0)) {
    throw new Error(INVALID_ARGUMENT);
  }

  const cache = new Map<string, CacheEntry<ReturnType<T>>>();

  return (...args: Parameters<T>): ReturnType<T> => {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      const entry = cache.get(key)!;
      if (entry.timeoutId) {
        clearTimeout(entry.timeoutId);
      }
      if (time !== undefined) {
        entry.timeoutId = setTimeout(() => {
          cache.delete(key);
        }, time);
      }
      return entry.result;
    }

    const result = func(...args);

    cache.set(key, {
      result,
      timeoutId:
        time !== undefined
          ? setTimeout(() => cache.delete(key), time)
          : undefined,
    });

    return result;
  };
};

export default memo;
