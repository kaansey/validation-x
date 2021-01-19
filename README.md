# validation-x

[![npm package][npm-badge]][npm] ![npm-bundle-size] ![Module formats][module-formats] ![npm-download-count]

Simple chain validator for string, number, date input

## String Validation

### Options

| Name      | Type                                   | Description                                                                     |
| --------- | -------------------------------------- | ------------------------------------------------------------------------------- |
| string    | func(errorMessage:string)              | Type check                                                                      |
| required  | func(errorMessage:string)              | isEmpty check                                                                   |
| len       | func(val: number, errorMessage:string) | Exact length check for input                                                    |
| min       | func(val: number, errorMessage:string) | Min length for input                                                            |
| max       | func(val: number, errorMessage:string) | Max length for input                                                            |
| matches   | func(val: number, errorMessage:string) | regex check                                                                     |
| email     | func(errorMessage:string)              | Email check with (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}\$/)         |
| url       | func(errorMessage:string)              | URL check with (/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+ | (?:www. | [-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]_)?\??(?:[-\+=&;%@.\w_]\_)#?(?:[\w]\*))?)/) |
| lowercase | func(errorMessage:string)              | lowercase check                                                                 |
| uppercase | func(errorMessage:string)              | uppercase check                                                                 |
| custom    | func(func, errorMessage:string)        | check with provided custom function                                             |

## Number Validation

### Options

| Name     | Type                                   | Description                         |
| -------- | -------------------------------------- | ----------------------------------- |
| number   | func(errorMessage:string)              | Type check                          |
| min      | func(val: number, errorMessage:string) | Min for input                       |
| max      | func(val: number, errorMessage:string) | Max for input                       |
| positive | func(errorMessage:string)              | If input is positive number         |
| negative | func(errorMessage:string)              | If input is negative number         |
| matches  | func(val: number, errorMessage:string) | regex check                         |
| custom   | func(func, errorMessage:string)        | check with provided custom function |

## Date Validation

### Options

| Name | Type                                 | Description   |
| ---- | ------------------------------------ | ------------- |
| min  | func(val: Date, errorMessage:string) | Min for input |
| max  | func(val: Date, errorMessage:string) | Max for input |

### License

This project is licensed under the MIT License - see the
[LICENCE.md](./LICENCE.md) file for details


[npm-download-count]: https://img.shields.io/npm/dm/validation-x
[npm-bundle-size]: https://img.shields.io/bundlephobia/min/validation-x
[npm-badge]: https://img.shields.io/npm/v/validation-x?style=flat-square
[npm]: https://www.npmjs.com/package/validation-x
[module-formats]: https://img.shields.io/badge/module%20formats-cjs%2C%20esm-green.svg?style=flat-square