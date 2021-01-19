import StringValidation from './String'


describe('String', () => {
    let stringValidation: StringValidation

    beforeEach(() => {
        stringValidation = new StringValidation()
    })

    describe('required', () => {
        it('should not return any error', () => {
            const schema = { name: stringValidation.required('required error') }

            schema.name.validate('test')
            expect(schema.name.errors).toEqual([])
        })

        it('should return type error', () => {
            const schema = { name: stringValidation.required('required error') }

            schema.name.validate()
            expect(schema.name.errors).toEqual(['Input should be type of string'])
        })

        it('should has an error', () => {
            const schema = { name: stringValidation.required('required error') }

            schema.name.validate('')
            expect(schema.name.errors).toEqual(['required error'])

            schema.name.validate('     ')
            expect(schema.name.errors).toEqual(['required error'])
        })
    })

    describe('len', () => {
        it('should not return any error', () => {
            const schema = { name: stringValidation.len(4, 'len error') }

            schema.name.validate('test')
            expect(schema.name.errors).toEqual([])
        })

        it('should return an error', () => {
            const schema = { name: stringValidation.len(4, 'len error') }
            schema.name.validate('testx')
            expect(schema.name.errors).toEqual(['len error'])
        })
    })

    describe('min', () => {
        it('should not return any error', () => {
            const schema = { name: stringValidation.min(3, 'min error') }

            schema.name.validate('test')
            expect(schema.name.errors).toEqual([])
        })

        it('should return an error', () => {
            const schema = { name: stringValidation.min(6, 'min error') }
            schema.name.validate('testx')
            expect(schema.name.errors).toEqual(['min error'])
        })
    })

    describe('max', () => {
        it('should not return any error', () => {
            const schema = { name: stringValidation.max(4, 'max error') }

            schema.name.validate('test')
            expect(schema.name.errors).toEqual([])
        })

        it('should return an error', () => {
            const schema = { name: stringValidation.max(3, 'max error') }
            schema.name.validate('testx')
            expect(schema.name.errors).toEqual(['max error'])
        })
    })

    describe('matches', () => {
        it('should not return any error', () => {
            const schema = { name: stringValidation.matches(/[a-z]$/, 'matches error') }

            schema.name.validate('test')
            expect(schema.name.errors).toEqual([])
        })

        it('should return an error', () => {
            const schema = { name: stringValidation.matches(/[a-z]$/, 'matches error') }
            schema.name.validate('testx1')
            expect(schema.name.errors).toEqual(['matches error'])

            schema.name.validate('testX')
            expect(schema.name.errors).toEqual(['matches error'])
        })
    })

    describe('email', () => {
        it('should not return any error', () => {
            const schema = { name: stringValidation.email('email error') }

            schema.name.validate('test@test.com')
            expect(schema.name.errors).toEqual([])
        })

        it('should return an error', () => {
            const schema = { name: stringValidation.email('email error') }

            schema.name.validate('testx1')
            expect(schema.name.errors).toEqual(['email error'])

            schema.name.validate('testx1@')
            expect(schema.name.errors).toEqual(['email error'])

            schema.name.validate('testx1@xxx')
            expect(schema.name.errors).toEqual(['email error'])
        })
    })

    describe('url', () => {
        it('should not return any error', () => {
            const schema = { name: stringValidation.url('url error') }

            // schema.name.validate('https://test.com')
            // expect(schema.name.errors).toEqual([])

            schema.name.validate('https://www.test.com')
            expect(schema.name.errors).toEqual([])

            schema.name.validate('ftp://test.com')
            expect(schema.name.errors).toEqual([])

            schema.name.validate('file://test&*@')
            expect(schema.name.errors).toEqual([])

            schema.name.validate('mailto:x@y.com')
            expect(schema.name.errors).toEqual([])
        })

        it('should return an error', () => {
            const schema = { name: stringValidation.url('url error') }
            schema.name.validate('testx1')
            expect(schema.name.errors).toEqual(['url error'])

            schema.name.validate('testx1@')
            expect(schema.name.errors).toEqual(['url error'])

        })
    })

    describe('lowercase', () => {
        it('should not return any error', () => {
            const schema = { name: stringValidation.lowercase('lowercase error') }

            schema.name.validate('test')
            expect(schema.name.errors).toEqual([])

            schema.name.validate('test xx 123')
            expect(schema.name.errors).toEqual([])
        })

        it('should return an error', () => {
            const schema = { name: stringValidation.lowercase('lowercase error') }

            schema.name.validate('testX')
            expect(schema.name.errors).toEqual(['lowercase error'])

            schema.name.validate('testx Y')
            expect(schema.name.errors).toEqual(['lowercase error'])
        })
    })

    describe('uppercase', () => {
        it('should not return any error', () => {
            const schema = { name: stringValidation.uppercase('uppercase error') }

            schema.name.validate('TEST')
            expect(schema.name.errors).toEqual([])

            schema.name.validate('TEST XX 123')
            expect(schema.name.errors).toEqual([])
        })

        it('should return an error', () => {
            const schema = { name: stringValidation.uppercase('uppercase error') }

            schema.name.validate('tEST ')
            expect(schema.name.errors).toEqual(['uppercase error'])

            schema.name.validate('TEST x')
            expect(schema.name.errors).toEqual(['uppercase error'])
        })
    })



    describe('custom', () => {
        it('should not return any error', () => {
            const schema = { name: stringValidation.custom((val: string) => val.includes('est'), 'custom error') }

            schema.name.validate('test')
            expect(schema.name.errors).toEqual([])

            schema.name.validate('test XX 123')
            expect(schema.name.errors).toEqual([])
        })

        it('should return an error', () => {
            const schema = { name: stringValidation.custom((val: string) => val.includes('est'), 'custom error') }

            schema.name.validate('te ')
            expect(schema.name.errors).toEqual(['custom error'])

            schema.name.validate('TEST')
            expect(schema.name.errors).toEqual(['custom error'])
        })
    })
})