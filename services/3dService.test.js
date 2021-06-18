const { addPhysicsSphere } = require('./3dService')
const { SUCCESS } = require('./constants')

describe('3d Service', () => {
    describe('Adding a Physics Sphere', () => {
        it('should verify if canvas is present', (name = 'defaultName') => {
            // toImplement
        })
        it('should return a SUCCESS when the sphere is added', (name = 'defaultName', user = '2839-2382-2323-2332-1') => {
            const response = addPhysicsSphere(name)
            expect(response.code)
            .toBe(SUCCESS)
        })

    })
})