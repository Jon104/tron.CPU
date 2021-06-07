const { addPackage, removePackage } = require('./services/PackageService');
const { 
  createAction,
  createActions,
  createComponent, 
  createDirectory, 
  createMethod, 
  createReactApp, 
  createReducer,
  createStateModule,
  initGit } = require('./services/CreationService');
const { salute } = require('./services/DialogueService')
const { enableWorkMode, howAreYou, thanks } = require('./services/DialogueService')
const { stopMusic } = require('./services/MusicService')

module.exports = (ws, data) => {
  const parsedData = JSON.parse(data)
  
  switch(parsedData.command) {
    case 'addPackage': return addPackage(ws, parsedData.parameters)
    case 'deletePackage': return removePackage(ws, parsedData.parameters)
    case 'createDir': return createDirectory(ws, parsedData.parameters)
    case 'initGit': return initGit(ws);
    case 'createReactApp': return createReactApp(ws, parsedData.parameters)
    case 'createAction': return createAction(ws, parsedData.parameters)
    case 'createActions': return createActions(ws, parsedData.parameters)
    case 'createComponent': return createComponent(ws, parsedData.parameters)
    case 'createMethod': return createMethod(ws, parsedData.parameters)
    case 'createReducer': return createReducer(ws, parsedData.parameters)
    case 'createStateModule': return createStateModule(ws, parsedData.parameters)
    case 'workModeEnabled': return enableWorkMode(ws)
    case 'salutation': return salute(ws)
    case 'stopMusic': return stopMusic(ws)
    case 'howAreYou': return howAreYou(ws)
    case 'thanks': return thanks(ws)
    default: ws.send('Sorry mate, not supported')
  }
}
