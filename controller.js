const { addPackage, removePackage } = require('./services/PackageService');
const { 
  createAction,
  createComponent, 
  createDirectory, 
  createMethod, 
  createReactApp, 
  createReducer,
  createStateModule,
  initGit } = require('./services/CreationService');
const { salute } = require('./services/DialogueService')
const { enableWorkMode, howAreYou, thanks } = require('./services/DialogueService')

module.exports = (ws, data) => {
  const parsedData = JSON.parse(data)
  
  switch(parsedData.command) {
    case 'addPackage': return addPackage(ws, parameter)
    case 'deletePackage': return removePackage(ws, parameter)
    case 'createDir': return createDirectory(ws, parameter)
    case 'initGit': return initGit(ws);
    case 'createReactApp': return createReactApp(ws, parameter)
    case 'createAction': return createAction(ws, parsedData.parameters)
    case 'createActions': return createActions(ws, parameter)
    case 'createComponent': return createComponent(ws, parameter)
    case 'createMethod': return createMethod(ws, parameter)
    case 'createReducer': return createReducer(ws, parameter)
    case 'createStateModule': return createStateModule(ws, parameter)
    case 'workModeEnabled': return enableWorkMode(ws)
    case 'salutation': return salute(ws)
    case 'stopMusic': return stopMusic(ws)
    case 'howAreYou': return howAreYou(ws)
    case 'thanks': return thanks(ws)
    default: ws.send('Sorry mate, not supported')
  }
}
