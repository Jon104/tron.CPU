const { exec } = require("child_process");
const { cwd } = require('./constants');
const { errorHandling } = require('./ErrorHandlers')

const addPackage = (ws, packageName) => {
  exec(`yarn add ${packageName}`, {cwd: cwd}, errorHandling);
  ws.send('I added the package!')
}

const removePackage = (ws, packageName) => {
  exec(`yarn remove ${packageName}`, {cwd: cwd}, errorHandling);
  ws.send('I removed the package!')
}

module.exports = { addPackage, removePackage };