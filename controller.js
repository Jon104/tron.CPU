const { addPackage, removePackage } = require('./services/PackageService');
const { createComponent, createDirectory, createMethod, createReactApp, initGit } = require('./services/CreationService');
const { enableWorkMode, howAreYou, thanks } = require('./services/DialogueService')

module.exports = (ws, data) => {
  const parsedData = JSON.parse(data)
  const splittedData = parsedData.command.split('_')
  
  switch(splittedData[0]) {
    case 'addPackage': return addPackage(ws, splittedData[1])
    case 'deletePackage': return removePackage(ws, splittedData[1])
    case 'createDir': return createDirectory(ws, splittedDate[1])
    case 'initGit': return initGit(ws);
    case 'createReactApp': return createReactApp(ws, splittedData[1])
    case 'createComponent': return createComponent(ws, splittedData[1])
    case 'createMethod': return createMethod(ws, splitted[1])
    case 'workModeEnabled': return enableWorkMode(ws)
    case 'salutation': return salute(ws)
    case 'stopMusic': return stopMusic(ws)
    case 'howAreYou': return howAreYou(ws)
    case 'thanks': return thanks(ws)
    default: ws.send('Sorry mate, not supported')
  }
}
