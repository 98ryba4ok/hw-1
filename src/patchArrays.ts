// @ts-nocheck
const INVALID_ARGUMENT = 'INVALID_ARGUMENT';
const patchArrays = (): void => {
  Array.prototype.count = function (): number {
    return this.length;
  };
  Array.prototype.insert = function (
    inputIndex: number,
    inputElement: any
  ): any[] {
    if (typeof inputIndex !== 'number') {
      throw new Error(INVALID_ARGUMENT);
    }
    if (inputIndex < 0) {
      this.unshift(inputElement);
    } else if (inputIndex > this.length) {
      this.push(inputElement);
    } else {
      this.splice(inputIndex, 0, inputElement);
    }
    return this;
  };
  Array.prototype.remove = function (inputValue: any): any[] {
    const index: number = this.indexOf(inputValue);
    if (index !== -1) {
      this.splice(index, 1);
    }
    return this;
  };
};
export default patchArrays;
