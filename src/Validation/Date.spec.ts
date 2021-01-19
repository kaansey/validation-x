import DateValidation from "./Date";

describe("Date", () => {
  let dateValidation: DateValidation;
  let testDate: Date

  beforeEach(() => {
    dateValidation = new DateValidation();
    testDate = new Date();
  });

  describe("min", () => {
    it("should not return any error", () => {

      const schema = {
        date: dateValidation.min(
          new Date(),
          "min error"
        ),
      };

      schema.date.validate(new Date());
      expect(schema.date.errors).toEqual([]);

      schema.date.validate(new Date(testDate.setDate(testDate.getDate() + 1)));
      expect(schema.date.errors).toEqual([]);
    });

    it("should return type error", () => {
      const schema = { date: dateValidation.min(new Date(testDate.setDate(testDate.getDate() - 2)), "min error") };

      schema.date.validate("1/1/2021");
      expect(schema.date.errors).toEqual(["Input should be type of Date"]);
    });

    it("should has an error", () => {
      const schema = { date: dateValidation.min(new Date(testDate.setDate(testDate.getDate() - 2)), "min error") };

      schema.date.validate(new Date(testDate.setDate(testDate.getDate() - 3)));
      expect(schema.date.errors).toEqual(["min error"]);

    });
  });

  describe("max", () => {
    it("should not return any error", () => {
      const schema = {
        date: dateValidation.max(
          new Date(),
          "max error"
        ),
      };

      schema.date.validate(new Date(testDate.setDate(testDate.getDate() - 1)));
      expect(schema.date.errors).toEqual([]);
    });


    it("should has an error", () => {
      const schema = { date: dateValidation.max(new Date(), "max error") };

      const test = new Date(testDate.setDate(testDate.getDate() + 3))
      schema.date.validate(test);
      expect(schema.date.errors).toEqual(["max error"]);

    });
  });
});
