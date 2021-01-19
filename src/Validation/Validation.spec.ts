import validation from "./Validation";

describe("Validation", () => {


    describe("string", () => {
        const schema = {
            name: validation.string().min(5, 'min error').lowercase('lowercase eeror').matches(/[a-z]+\d+/, 'match error')
        };

        it("should not return any error", () => {
            schema.name.validate('test123');
            expect(schema.name.errors).toEqual([])

        });



        it("should has an error", () => {
            schema.name.validate('test $$%123');
            expect(schema.name.errors).toEqual(['match error'])

            schema.name.validate('tesT $$%123');
            expect(schema.name.errors).toEqual(['lowercase eeror', 'match error'])

            schema.name.validate('tE$');
            expect(schema.name.errors).toEqual(['min error', 'lowercase eeror', 'match error'])

        });
    });

    describe("number", () => {
        const schema = {
            age: validation.number().min(10, 'min error').max(40, 'max error').custom((val) => val % 2 === 0, 'custom error')
        };

        it("should not return any error", () => {
            schema.age.validate(12);
            expect(schema.age.errors).toEqual([])

            schema.age.validate(26);
            expect(schema.age.errors).toEqual([])

        });

        it("should has an error", () => {
            schema.age.validate(6);
            expect(schema.age.errors).toEqual(['min error'])

            schema.age.validate(46);
            expect(schema.age.errors).toEqual(['max error'])

            schema.age.validate(47);
            expect(schema.age.errors).toEqual(['max error', 'custom error'])
        });
    });
});
