import NumberValidation from './Number'


describe('Number', () => {
    let numberValidation: NumberValidation

    beforeEach(() => {
        numberValidation = new NumberValidation()
    })

    describe('min', () => {
        it('should not return any error', () => {
            const schema = { age: numberValidation.min(1, 'min error') }

            schema.age.validate(1)
            expect(schema.age.errors).toEqual([])
            schema.age.validate(2)
            expect(schema.age.errors).toEqual([])
        })

        it('should return type error', () => {
            const schema = { age: numberValidation.min(1, 'min error') }

            schema.age.validate('1')
            expect(schema.age.errors).toEqual(['Input should be type of number'])
        })

        it('should has an error', () => {
            const schema = { age: numberValidation.min(1, 'min error') }

            schema.age.validate(0)
            expect(schema.age.errors).toEqual(['min error'])

            schema.age.validate(-1)
            expect(schema.age.errors).toEqual(['min error'])
        })
    })

    describe('max', () => {
        it('should not return any error', () => {
            const schema = { age: numberValidation.max(1, 'max error') }

            schema.age.validate(1)
            expect(schema.age.errors).toEqual([])
            schema.age.validate(0)
            expect(schema.age.errors).toEqual([])
        })

        it('should has an error', () => {
            const schema = { age: numberValidation.max(1, 'max error') }

            schema.age.validate(2)
            expect(schema.age.errors).toEqual(['max error'])

        })
    })

    describe('positive', () => {
        it('should not return any error', () => {
            const schema = { age: numberValidation.positive('positive error') }

            schema.age.validate(1)
            expect(schema.age.errors).toEqual([])

        })

        it('should has an error', () => {
            const schema = { age: numberValidation.positive('positive error') }

            schema.age.validate(0)
            expect(schema.age.errors).toEqual(['positive error'])

            schema.age.validate(-1)
            expect(schema.age.errors).toEqual(['positive error'])

        })
    })

    describe('negative', () => {
        it('should not return any error', () => {
            const schema = { age: numberValidation.negative('negative error') }

            schema.age.validate(-1)
            expect(schema.age.errors).toEqual([])

        })

        it('should has an error', () => {
            const schema = { age: numberValidation.negative('negative error') }

            schema.age.validate(0)
            expect(schema.age.errors).toEqual(['negative error'])

            schema.age.validate(1)
            expect(schema.age.errors).toEqual(['negative error'])

        })
    })

    describe('matches', () => {
        it('should not return any error', () => {
            const schema = { age: numberValidation.matches(/[0-3]/, 'matches error') }

            schema.age.validate(0)
            expect(schema.age.errors).toEqual([])

            schema.age.validate(2)
            expect(schema.age.errors).toEqual([])

        })

        it('should has an error', () => {
            const schema = { age: numberValidation.matches(/[0-3]/, 'matches error') }

            schema.age.validate(4)
            expect(schema.age.errors).toEqual(['matches error'])

            schema.age.validate(-4)
            expect(schema.age.errors).toEqual(['matches error'])

        })
    })

    describe('custom', () => {
        it('should not return any error', () => {
            const schema = {
                age: numberValidation.custom((val: number) => val * 2 === 8, 'custom error')
            }

            schema.age.validate(4)
            expect(schema.age.errors).toEqual([])
        })

        it('should has an error', () => {
            const schema = {
                age: numberValidation.custom((val: number) => val * 2 === 8, 'custom error')
            }

            schema.age.validate(-4)
            expect(schema.age.errors).toEqual(['custom error'])
        })
    })

})