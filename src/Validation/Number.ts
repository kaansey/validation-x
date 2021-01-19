import Base from "./Base";

function typeCheck(val: any) {
  return typeof val === "number";
}

class NumberValidation extends Base {
  constructor() {
    super({ type: "number", typeCheck });
  }

  min(min: number, errorMessage: string = "") {
    return this.test({
      valFunc: (value: number) => {
        return value >= min;
      },
      message: errorMessage,
    });
  }

  max(max: number, errorMessage: string = "") {
    return this.test({
      valFunc: (value: number) => {
        return value <= max;
      },
      message: errorMessage,
    });
  }

  positive(errorMessage: string = "") {
    return this.test({
      valFunc: (value: number) => {
        return value > 0;
      },
      message: errorMessage,
    });
  }

  negative(errorMessage: string = "") {
    return this.test({
      valFunc: (value: number) => {
        return value < 0;
      },
      message: errorMessage,
    });
  }

  matches(regex: any, errorMessage: string = "") {
    return this.test({
      valFunc: (value: number) => {
        return regex.test(value.toString());
      },
      message: errorMessage,
    });
  }

  custom(func: (val: number) => boolean, errorMessage: string = "") {
    return this.test({
      valFunc: (value: number) => {
        return func(value);
      },
      message: errorMessage,
    });
  }
}

export default NumberValidation;
