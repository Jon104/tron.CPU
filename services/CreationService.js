const fs = require('fs');
const { exec } = require("child_process");
const { actions, actionsIndex, codeDirectory, components, cwd, reducers, reducersIndex } = require('./constants')
const { errorHandling } = require('./ErrorHandlers')
const { actionsIndexTemplate, actionGetMethodTemplate, componentBasicTemplate, emptyFileTemplate, reducerBasicTemplate, reducerIndexTemplate } = require('./TemplateService')

// todo remove websocket from here return string
const createAction = (ws, { name, file }) => {
  if (!fs.existsSync(`${file}Actions.js`)) createActions(ws, file) // todo ask the user to confirm creation  
  createMethod(ws, name, `${actions}${file}Actions.js`, actionGetMethodTemplate(name))
  // add to export
}

const createActions = (ws, name) => {
  if (!fs.existsSync(actions)) fs.mkdirSync(actions);
  if (!fs.existsSync(actionsIndex)) fs.writeFile(actionsIndex, actionsIndexTemplate(name), errorHandling)
  
  const path = `${name}Actions` + '.js'
  fs.writeFile(actions + path, emptyFileTemplate(), errorHandling)
  ws.send(`I created an Action called ${name}!`)
}

const createComponent = (ws, name) => {
  if (!fs.existsSync(components)) fs.mkdirSync(components);
  fs.writeFile(components.concat(`${name}`) + '.jsx', componentBasicTemplate(name), errorHandling);
  ws.send(`I created a component called ${name}, and I liked it..!`)
}

const createDirectory = (ws, name) => {
  let directoryToCreate = codeDirectory + name;
  if (!fs.existsSync(directoryToCreate)) fs.mkdirSync(directoryToCreate);
  ws.send(`I created a directory called ${name}!`)
}

const lineBreaks = "\n";
const createMethod = (ws, name, path, template) => {
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

const createReducer = (ws, name) => {
  if (!fs.existsSync(reducers)) fs.mkdirSync(reducers);
  if (!fs.existsSync(reducersIndex)) fs.writeFile(reducersIndex, reducerIndexTemplate(name), errorHandling)
  
  const path = `${name}Reducer` + '.js'
  fs.writeFile(reducers + path, reducerBasicTemplate(name), errorHandling)
  ws.send(`I created a reducer called ${name}`)
}

const createStateModule = (ws, name) => {
  createReducer(ws, name)
  createAction(ws, name)
}

const createReactApp = (ws, name) => {
  exec(`npx create-react-app ${name}`, {cwd: codeDirectory}, errorHandling)
}

const initGit = () => {
  exec('git init', {cwd: cwd}, errorHandling)
}

module.exports = { createAction, createComponent, createDirectory, createMethod, createReactApp, createReducer, createStateModule, initGit }
