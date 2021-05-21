const fs = require('fs');
const { exec } = require("child_process");
var codeDirectory = '/home/jarvis/code/';
const cwd = codeDirectory + 'wi-fi/';
const components = cwd + 'src/components/'
var selectedDirectory;

const componentInitFunction = (name) => `import React from 'react'\r\n\r\nconst ${name} = () => {\r\n  return (\r\n    <>\r\n      <p>I'M ALIVE!</p>\r\n    </>\r\n  )\r\n}\r\n\r\nexport default ${name}`

const errorHandling = (error, stdout, stderr) => {
  if (error) {
      console.log(`error: ${error.message}`);
      return;
  }
  if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
  }
  console.log(`stdout: ${stdout}`);
}

const WebSocket = require('ws');
const wso = new WebSocket.Server({ port: 8080 });

wso.on('connection', function connection(ws, req) {
  console.log('connected')
  ws.send('Welcome');

  ws.on('message', incoming = (data) => {
    const parsedData = JSON.parse(data)
    const splittedData = parsedData.command.split('_')
    
    switch(splittedData[0]) {
      case 'addPackage':
        exec(`yarn add ${splittedData[1]}`, {cwd: cwd}, errorHandling);
        ws.send('I added the package!')
        break;
      case 'createDir':
        let directoryToCreate = codeDirectory + splittedData[1];
        selectedDirectory = codeDirectory + splittedData[1];
        if (!fs.existsSync(directoryToCreate)) fs.mkdirSync(directoryToCreate);
        ws.send('created the directory')
        break;
      case 'initGit':
        exec('git init', {cwd: codeDirectory + 'wi-fi'}, errorHandling);
        break;
      case 'createReactApp':
        exec(`npx create-react-app ${splittedData[1]}`, {cwd: codeDirectory}, errorHandling);
        break;
      case 'createComponent':
        if (!fs.existsSync(components)) fs.mkdirSync(components);
        fs.writeFile(components.concat(`${splittedData[1]}`) + '.jsx', componentInitFunction(splittedData[1]), errorHandling);
        ws.send('I created a react hook component, and I liked it..!')
        break;
      case 'createMethod':
        const newPath = components.concat('cast').concat('.jsx');
        const test2 = fs.readFileSync(newPath).toString()
        const array = test2.split("\n");
        const test = array.findIndex((current) => current.includes('return'))
        const toWrite = `  const ${splittedData[1]} = () => console.log('Not yet implemented')\r\n`
        array.splice(test, 0, toWrite)
        const toString = array.toString().replace(/,/g, '')
        fs.writeFile(newPath, toString, errorHandling);
        break;
      case 'deletePackage':
        exec(`yarn remove ${splittedData[1]}`, {cwd: cwd}, errorHandling);
        ws.send('I removed the package!')
        break;
      case 'workModeEnabled':
        ws.send("Work mode enable! I'm sure we'll be focused for AT LEAST 7 minutes this time!")
        ws.send("PlayWeBuiltThisCity")
        break;
      case 'salutation':
        ws.send('Hello to you my dear old friend')
        break;
      case 'stopMusic':
        ws.send('Awww... it was my favorite song....!')
        break;
      case 'howAreYou':
        ws.send("I'm good. How about you?")
        break;
      case 'thanks':
        ws.send("Ohhh how lovely........!")
        break;
      default:
        ws.send('Sorry mate, not supported')
    }
  });
});

wso.on('close', function close() {
  console.log('disconnected');
});
