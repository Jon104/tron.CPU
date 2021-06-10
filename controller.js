const { addPackage, removePackage } = require('./services/PackageService');
const { 
  createAction,
  createActions,
  createComponent, 
  createDirectory, 
  createMethod, 
  createReactApp, 
  createReducers,
  createStateModule,
  initGit } = require('./services/CreationService');
const { exec } = require("child_process");
const { salute } = require('./services/DialogueService')
const { enableWorkMode, howAreYou, thanks } = require('./services/DialogueService')
const { stopMusic } = require('./services/MusicService')

module.exports = (ws, data) => {
  const parsedData = JSON.parse(data)
  const response = executeCommand(parsedData, ws);
  ws.send(response)
}

const executeCommand = (parsedData, ws) => {
  switch (parsedData.command) {
    case 'addPackage': return addPackage(ws, parsedData.parameters);
    case 'deletePackage': return removePackage(ws, parsedData.parameters);
    case 'createDir': return createDirectory(ws, parsedData.parameters);
    case 'initGit': return initGit(exec);
    case 'createReactApp': return createReactApp(exec, parsedData.parameters);
    case 'createAction': return createAction(ws, parsedData.parameters);
    case 'createActions': return createActions(ws, parsedData.parameters);
    case 'createComponent': return createComponent(parsedData.parameters.name);
    case 'createMethod': return createMethod(ws, parsedData.parameters);
    case 'createReducers': return createReducers(parsedData.parameters.name);
    case 'createStateModule': return createStateModule(ws, parsedData.parameters);
    case 'workModeEnabled': return enableWorkMode(ws);
    case 'salutation': return salute();
    case 'stopMusic': return stopMusic();
    case 'howAreYou': return howAreYou();
    case 'thanks': return thanks();
    default: ws.send('Sorry mate, not supported');
  }
}

