import Base from "./Base";
declare class DateValidation extends Base {
    constructor();
    min(min: Date, errorMessage?: string): this;
    max(max: Date, errorMessage?: string): this;
}
export default DateValidation;
