import Base from "./Base";

function typeCheck(val: any) {
  return typeof val === "string";
}


class StringValidation extends Base {
  constructor() {
    super({ type: "string", typeCheck });
  }

  required(errorMessage: string = "This field is required") {
    return this.test({
      valFunc: (value: string) => {
        return !!value && !!value.trim();
      },
      message: errorMessage,
    });
  }

  len(len: number, errorMessage: string = "") {
    return this.test({
      valFunc: (value: string) => {
        return value.length === len;
      },
      message: errorMessage,
    });
  }

  min(min: number, errorMessage: string = "") {
    return this.test({
      valFunc: (value: string) => {
        return value.length >= min;
      },
      message: errorMessage,
    });
  }

  max(max: number, errorMessage: string = "") {
    return this.test({
      valFunc: (value: string) => {
        return value.length <= max;
      },
      message: errorMessage,
    });
  }

  matches(regex: any, errorMessage: string = "") {
    return this.test({
      valFunc: (value: string) => {
        return regex.test(value);
      },
      message: errorMessage,
    });
  }

  email(errorMessage: string = "") {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return this.test({
      valFunc: (value: string) => {
        return regex.test(value);
      },
      message: errorMessage,
    });
  }

  url(errorMessage: string = "") {
    const regex = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/
    return this.test({
      valFunc: (value: string) => {
        return regex.test(value);
      },
      message: errorMessage,
    });
  }

  lowercase(errorMessage: string = "") {
    return this.test({
      valFunc: (value: string) => {
        return value === value.toLowerCase();
      },
      message: errorMessage,
    });
  }

  uppercase(errorMessage: string = "") {
    return this.test({
      valFunc: (value: string) => {
        return value === value.toUpperCase();
      },
      message: errorMessage,
    });
  }

  custom(func: (val: string) => boolean, errorMessage: string = "") {
    return this.test({
      valFunc: (value: string) => {
        return func(value);
      },
      message: errorMessage,
    });
  }
}

export default StringValidation;
