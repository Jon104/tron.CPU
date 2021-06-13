const { createActions, createReactApp, createReducers, createComponent } = require('./CreationService')
const { errorHandling } = require('./ErrorHandlers')
const { actions, actionsIndex, codeDirectory, components, cwd, reducers, reducersIndex } = require('./constants')
const { actionsIndexTemplate, componentBasicTemplate, emptyFileTemplate, reducerBasicTemplate, reducerIndexTemplate } = require('./TemplateService')
const { formatActionFilepath, formatComponentFilepath, formatReducerFilepath } = require('./fileUtils');

const fs = require('fs');
jest.mock('fs')

describe('Creation Service', () => {
  describe('Create a React Application', () => {
    it('should call exec with create-react-app, currentWorkingDirectory and error parameters', (name = 'defaultName') => {
      const exec = jest.fn();
      createReactApp(exec, name)
      
      expect(exec)
        .toBeCalledWith(
          `npx create-react-app ${name}`, 
          { cwd: codeDirectory }, 
          errorHandling
        )
    })

    it('should confirm the creation to the user', (name = 'defaultName') => {
      const exec = jest.fn();
      expect(createReactApp(exec, { name }))
        .toBe("I've created a react application")
    })
  })

  describe('Create Reducers', () => {
    describe("given the reducer directory doesn't exist", () => {
      it('should call create a reducer directory and its index file', (name = 'defaultName') => {
        fs.existsSync.mockReturnValue(false)

        const response = createReducers(name)
        expect(fs.mkdirSync).toBeCalledWith(reducers)
        expect(fs.writeFile).toBeCalledWith(reducersIndex, reducerIndexTemplate(name), errorHandling)
        expect(fs.writeFile).toBeCalledWith(formatReducerFilepath(name), reducerBasicTemplate(name), errorHandling)
        expect(response).toBe(`I created a reducer called ${name}`)
      })
    })

  describe('Create a component', () => {
    describe("given the components directory doesn't exist", () => {
      it('should create the components directory + index file and a basic component file using its name', (name = 'defaultName') => {
        fs.existsSync.mockReturnValue(false)

        const response = createComponent(name)
        expect(fs.mkdirSync).toBeCalledWith(components)
        expect(fs.writeFile).toBeCalledWith(formatComponentFilepath(name), componentBasicTemplate(name), errorHandling)
        expect(response).toBe(`I created a component called ${name}, and I liked it..!`)
      })
    })
  })

  describe('Create Actions', () => {
    describe("given the actions directory doesn't exist", () => {
      it('should create an actions directory + index file', (name = 'defaultName') => {
        fs.existsSync.mockReturnValue(false)
        const response = createActions(name)
        expect(fs.mkdirSync).toBeCalledWith(actions)
        expect(fs.writeFile).toBeCalledWith(actionsIndex, actionsIndexTemplate(name), errorHandling)
        expect(fs.writeFile).toBeCalledWith(formatActionFilepath(name), emptyFileTemplate(), errorHandling)
        expect(response).toBe(`I created an Action called ${name}!`)
      })
    })
  })
  })
});