declare class Base {
    type: string;
    typeCheck: (val: any) => boolean;
    tests: Array<(val: any) => void>;
    errors: Array<string>;
    isTypeError: boolean;
    constructor({ type, typeCheck }: {
        type: string;
        typeCheck: (val: any) => boolean;
    });
    _setTypeError(): void;
    _removeTypeError(): void;
    _addError(message: string): void;
    test({ valFunc, message }: {
        valFunc: (val: any) => boolean;
        message: string;
    }): this;
    validate(val?: any): void;
}
export default Base;
