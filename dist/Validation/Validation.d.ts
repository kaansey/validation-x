import StringValidation from "./String";
import NumberValidation from "./Number";
import DateValidation from "./Date";
declare function createStringValidation(): StringValidation;
declare function createNumberValidation(): NumberValidation;
declare function createDateValidation(): DateValidation;
declare const validation: {
    string: typeof createStringValidation;
    number: typeof createNumberValidation;
    date: typeof createDateValidation;
};
export default validation;
