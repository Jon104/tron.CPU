const { setupPwaApp } = require('./PwaService')
const { isFilePresent } = require('./fileUtils')
const { MANIFEST, SUCCESS } = require('./constants')

describe('Pwa Service', () => {
    describe('Given the manifest file does not exist', () => {
        it('should return success if created correctly', (name = 'defaultName') => {
            const response = setupPwaApp(name)
            expect(response.code).toBe(SUCCESS)
        })
    })
})