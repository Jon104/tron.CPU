const { exec } = require("child_process");
const { cwd } = require('./constants');
const { errorHandling } = require('./ErrorHandlers')

const addPackage = (ws, { name }) => {
  exec(`yarn add ${name}`, {cwd: cwd}, errorHandling);
  ws.send('I added the package!')
}

const removePackage = (ws, { name }) => {
  exec(`yarn remove ${name}`, {cwd: cwd}, errorHandling);
  ws.send('I removed the package!')
}

module.exports = { addPackage, removePackage };