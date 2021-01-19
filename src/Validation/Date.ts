import Base from "./Base";

let isDate = (obj: any) => Object.prototype.toString.call(obj) === "[object Date]";

function typeCheck(v: any) {
  return isDate(v);
}

class DateValidation extends Base {
  constructor() {
    super({ type: "Date", typeCheck });
  }

  min(min: Date, errorMessage: string = "") {
    return this.test({
      valFunc: (value: Date) => {
        return value.getTime() >= min.getTime();
      },
      message: errorMessage,
    });
  }

  max(max: Date, errorMessage: string = "") {
    return this.test({
      valFunc: (value: Date) => {
        return value.getTime() <= max.getTime();
      },
      message: errorMessage,
    });
  }
}

export default DateValidation;
