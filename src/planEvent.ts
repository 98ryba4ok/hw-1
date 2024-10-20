const planEvent = (cb: () => any, timeout: number = 0): Promise<any> => {
  if (typeof cb !== 'function' || typeof timeout !== 'number') {
    throw new Error('INVALID_ARGUMENT');
  }
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(cb());
    }, timeout);
  });
};

export default planEvent;
