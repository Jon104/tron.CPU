const fs = require('fs');
const { actions, actionsIndex, codeDirectory, components, cwd, reducers, reducersIndex } = require('./constants')
const { errorHandling } = require('./ErrorHandlers')
const { actionsIndexTemplate, actionGetMethodTemplate, componentBasicTemplate, emptyFileTemplate, reducerBasicTemplate, reducerIndexTemplate } = require('./TemplateService')
const { formatActionFilepath, formatComponentFilepath, formatReducerFilepath } = require('./fileUtils')

const createAction = (name, file) => {
  if (!fs.existsSync(formatActionFilepath(file))) createActions(file)
  createMethod(name, formatActionFilepath(file), actionGetMethodTemplate(name))
  return `I created an action called ${name} in to the file ${file}`
}

const createActions = name => {
  if (!fs.existsSync(actions)) fs.mkdirSync(actions);
  if (!fs.existsSync(actionsIndex)) fs.writeFile(actionsIndex, actionsIndexTemplate(name), errorHandling)
  
  fs.writeFile(formatActionFilepath(name), emptyFileTemplate(), errorHandling)
  return `I created an Action called ${name}!`
}

const createComponent = name => {
  if (!fs.existsSync(components)) fs.mkdirSync(components);
  fs.writeFile(formatComponentFilepath(name), componentBasicTemplate(name), errorHandling);
  return `I created a component called ${name}, and I liked it..!`
}

const createDirectory = (ws, { name }) => {
  let directoryToCreate = codeDirectory + name;
  if (!fs.existsSync(directoryToCreate)) fs.mkdirSync(directoryToCreate);
  ws.send(`I created a directory called ${name}!`)
}

const lineBreaks = "\n";
const createMethod = (ws, { name, path, template }) => {
  const readStream = fs.readFileSync(path).toString()
  const lines = readStream.split(lineBreaks);
  console.log()
  lines.splice(lines.length, 0, template)
  // forComponents
  // const test = eachLines.findIndex((current) => current.includes('return'))
  // const toWrite = `  const ${name} = () => console.log('Not yet implemented')\r\n`
  // array.splice(test, 0, toWrite)
  fs.writeFile(path, lines.toString(), errorHandling);
  ws.send(`I create the method called ${name}`)
}

const createReducers = name => {
  if (!fs.existsSync(reducers)) fs.mkdirSync(reducers);
  if (!fs.existsSync(reducersIndex)) fs.writeFile(reducersIndex, reducerIndexTemplate(name), errorHandling)
  
  fs.writeFile(formatReducerFilepath(name), reducerBasicTemplate(name), errorHandling)
  return `I created a reducer called ${name}`
}

const createStateModule = name => {
  createReducers(ws, name)
  createAction(ws, name)
}

const createReactApp = (execute, name) => {
  // todo requires lowerletters
  execute( `npx create-react-app ${name}`, {cwd: codeDirectory}, errorHandling)
  return "I've created a react application"
}

const initGit = execute => {
  execute('git init', {cwd: cwd}, errorHandling)
  return "I've initialized git"
}

module.exports = { createAction, createActions, createComponent, createDirectory, createMethod, createReactApp, createReducers, createStateModule, initGit }



