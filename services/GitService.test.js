const { addOrigin, initGit } = require('./GitService')
const { SUCCESS } = require('./constants')

describe('Git Service', () => {
    describe('Adding an origin', () => {
      it('should return a SUCCESS when remote origin is added', (name = 'defaultName', user = '2839-2382-2323-2332-1') => {
        const response = addOrigin(name, user)
        expect(response.code)
          .toBe(SUCCESS)
      })
    })

    describe('Initialise a git repository', () => {
      it('should call exec with git init, current working directory and errorhandler', () => {
        const exec = jest.fn();
        initGit(exec)
        
        expect(exec)
          .toBeCalledWith(
            'git init', 
            { cwd: cwd }, 
            errorHandling
          )
      })
  
      it('should confirm the creation to the user', () => {
        const exec = jest.fn();
        expect(initGit(exec))
          .toBe("I've initialized git")
      })
    })
})  