const INVALID_ARGUMENT = 'INVALID_ARGUMENT';
function pow(base: number, exp?: number): number;
function pow(base: number, exp?: number): (exp: number) => number;
function pow(base: number, exp?: number): number | ((exp: number) => number) {
  if (
    typeof base !== 'number' ||
    (exp !== undefined && typeof exp !== 'number')
  ) {
    throw new Error(INVALID_ARGUMENT);
  }

  if (exp === undefined) {
    return (exp: number) => pow(base, exp);
  }

  return base ** exp;
}

export default pow;
