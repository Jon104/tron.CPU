const { addPackage, removePackage } = require('./services/PackageService');
const { addPhysicsSphere } = require('./services/3dService')
const { 
  createAction,
  createActions,
  createComponent, 
  createDirectory, 
  createMethod, 
  createReactApp, 
  createReducers,
  createStateModule } = require('./services/CreationService');
const { exec } = require("child_process");
const { enableWorkMode, howAreYou, salute, thanks } = require('./services/DialogueService')
const { addOrigin, initGit } = require('./services/GitService')
const { stopMusic } = require('./services/MusicService')

module.exports = (ws, data) => {
  const parsedData = JSON.parse(data)
  const response = executeCommand(parsedData, ws);
  ws.send(response.message)
}

const executeCommand = (parsedData, ws) => {
  switch (parsedData.command) {
    case 'addOrigin': return addOrigin(parsedData.parameters) // not yet supported
    case 'addPackage': return addPackage(ws, parsedData.parameters);
    case 'addPhysicsSphere': return addPhysicsSphere(parsedData.parameters)
    case 'deletePackage': return removePackage(ws, parsedData.parameters);
    case 'createDir': return createDirectory(ws, parsedData.parameters);
    case 'createReactApp': return createReactApp(exec, parsedData.parameters.name);
    case 'createAction': return createAction(parsedData.parameters.name, parsedData.parameters.file);
    case 'createActions': return createActions(parsedData.parameters.name);
    case 'createComponent': return createComponent(parsedData.parameters.name);
    case 'createMethod': return createMethod(ws, parsedData.parameters);
    case 'createReducers': return createReducers(parsedData.parameters.name);
    case 'createStateModule': return createStateModule(parsedData.parameters.name);
    case 'initGit': return initGit(exec); // not yet supported
    case 'workModeEnabled': return enableWorkMode(ws);
    case 'salutation': return salute();
    case 'stopMusic': return stopMusic();
    case 'howAreYou': return howAreYou();
    case 'thanks': return thanks();
    default: ws.send('Sorry mate, not supported');
  }
}

