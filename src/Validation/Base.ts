

class Base {
  type: string;
  typeCheck: (val: any) => boolean;
  tests: Array<(val: any) => void>
  errors: Array<string>
  isTypeError: boolean

  constructor({ type, typeCheck }: { type: string, typeCheck: (val: any) => boolean }) {
    this.type = type;
    this.typeCheck = typeCheck;
    this.tests = [];
    this.errors = [];
    this.isTypeError = false;
  }

  _setTypeError() {
    this.isTypeError = true;
    this._addError(`Input should be type of ${this.type}`);
  }

  _removeTypeError() {
    this.isTypeError = false;
  }

  _addError(message: string) {
    this.errors.push(message);
  }

  test({ valFunc, message = "" }: {
    valFunc: (val: any) => boolean,
    message: string
  }) {
    if (typeof valFunc !== "function") {
      throw new Error("func is a requeired paramater.");
    }

    const self = this;

    const testFunc = function (val: any) {
      if (!self.typeCheck(val) && !self.isTypeError) {
        self._setTypeError();
      } else {
        self._removeTypeError();
        const isValid = valFunc(val);
        if (!isValid) {
          self._addError(message);
        }
      }
    };

    this.tests.push(testFunc);

    return this;
  }

  validate(val?: any): void {
    this.errors = [];
    this.tests.forEach((test) => test(val));
  }
}


export default Base