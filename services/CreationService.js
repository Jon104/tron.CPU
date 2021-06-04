const fs = require('fs');
const { exec } = require("child_process");
const { actions, actionsIndex, codeDirectory, components, cwd, reducers, reducersIndex } = require('./constants')
const { errorHandling } = require('./ErrorHandlers')
const { actionsIndexTemplate, componentBasicTemplate, emptyFileTemplate, reducerBasicTemplate, reducerIndexTemplate } = require('./TemplateService')

const createAction = (ws, name) => {
  if (!fs.existsSync(actions)) fs.mkdirSync(actions);
  if (!fs.existsSync(actionsIndex)) fs.writeFile(actionsIndex, actionsIndexTemplate(name), errorHandling)
  
  const path = `${name}Actions` + '.js'
  fs.writeFile(actions + path, emptyFileTemplate(), errorHandling)
  ws.send(`I created a reducer called ${name}, and I liked it..!`)
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

const createMethod = (ws, name) => {
  const newPath = components.concat('cast').concat('.jsx');
  const test2 = fs.readFileSync(newPath).toString()
  const array = test2.split("\n");
  const test = array.findIndex((current) => current.includes('return'))
  const toWrite = `  const ${name} = () => console.log('Not yet implemented')\r\n`
  array.splice(test, 0, toWrite)
  const toString = array.toString().replace(/,/g, '')
  fs.writeFile(newPath, toString, errorHandling);
  ws.send(`I create the method called ${name}`)
}

const createReducer = (ws, name) => {
  if (!fs.existsSync(reducers)) fs.mkdirSync(reducers);
  if (!fs.existsSync(reducersIndex)) fs.writeFile(reducersIndex, reducerIndexTemplate(name), errorHandling)
  
  const path = `${name}Reducer` + '.js'
  fs.writeFile(reducers + path, reducerBasicTemplate(name), errorHandling)

const createStateModule = (ws, name) => {
  createReducer(ws, name)
  createAction(ws, name)
}

const createReactApp = (ws, name) => exec(`npx create-react-app ${name}`, {cwd: codeDirectory}, errorHandling);

const initGit = (ws) => exec('git init', {cwd: cwd}, errorHandling)


module.exports = { createAction, createComponent, createDirectory, createMethod, createReactApp, createReducer, createStateModule, initGit };