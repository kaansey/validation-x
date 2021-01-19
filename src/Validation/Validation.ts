import StringValidation from "./String";
import NumberValidation from "./Number";
import DateValidation from "./Date";

//validation.js
function createStringValidation() {
  return new StringValidation();
}

function createNumberValidation() {
  return new NumberValidation();
}

function createDateValidation() {
  return new DateValidation();
}


const validation = {
  string: createStringValidation,
  number: createNumberValidation,
  date: createDateValidation,
}

export default validation