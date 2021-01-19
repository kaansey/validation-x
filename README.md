# x-validation

Simple chain validator for string, number, date input

## String Validation

### Options

| Name      | Type                            | Description                                                                     |
| --------- | ------------------------------- | ------------------------------------------------------------------------------- |
| string    | func(errorMessage)              | Type check                                                                      |
| required  | func(errorMessage)              | isEmpty check                                                                   |
| len       | func(val: number, errorMessage) | Exact length check for input                                                    |
| min       | func(val: number, errorMessage) | Min length for input                                                            |
| max       | func(val: number, errorMessage) | Max length for input                                                            |
| matches   | func(val: number, errorMessage) | regex check                                                                     |
| email     | func(errorMessage)              | Email check with (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}\$/)         |
| url       | func(errorMessage)              | URL check with (/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+ | (?:www. | [-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]_)?\??(?:[-\+=&;%@.\w_]\_)#?(?:[\w]\*))?)/) |
| lowercase | func(errorMessage)              | lowercase check                                                                 |
| uppercase | func(errorMessage)              | uppercase check                                                                 |
| custom    | func(func, errorMessage)        | check with provided custom function                                             |

## Number Validation

### Options

| Name     | Type                            | Description                         |
| -------- | ------------------------------- | ----------------------------------- |
| number   | func(errorMessage)              | Type check                          |
| min      | func(val: number, errorMessage) | Min for input                       |
| max      | func(val: number, errorMessage) | Max for input                       |
| positive | func(errorMessage)              | If input is positive number         |
| negative | func(errorMessage)              | If input is negative number         |
| matches  | func(val: number, errorMessage) | regex check                         |
| custom   | func(func, errorMessage)        | check with provided custom function |

## Date Validation

### Options

| Name | Type                          | Description   |
| ---- | ----------------------------- | ------------- |
| min  | func(val: Date, errorMessage) | Min for input |
| max  | func(val: Date, errorMessage) | Max for input |

### License

This project is licensed under the MIT License - see the
[LICENCE.md](./LICENCE.md) file for details
