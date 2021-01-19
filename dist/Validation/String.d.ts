import Base from "./Base";
declare class StringValidation extends Base {
    constructor();
    required(errorMessage?: string): this;
    len(len: number, errorMessage?: string): this;
    min(min: number, errorMessage?: string): this;
    max(max: number, errorMessage?: string): this;
    matches(regex: any, errorMessage?: string): this;
    email(errorMessage?: string): this;
    url(errorMessage?: string): this;
    lowercase(errorMessage?: string): this;
    uppercase(errorMessage?: string): this;
    custom(func: (val: string) => boolean, errorMessage?: string): this;
}
export default StringValidation;
