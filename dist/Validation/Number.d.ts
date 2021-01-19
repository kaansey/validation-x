import Base from "./Base";
declare class NumberValidation extends Base {
    constructor();
    min(min: number, errorMessage?: string): this;
    max(max: number, errorMessage?: string): this;
    positive(errorMessage?: string): this;
    negative(errorMessage?: string): this;
    matches(regex: any, errorMessage?: string): this;
    custom(func: (val: number) => boolean, errorMessage?: string): this;
}
export default NumberValidation;
