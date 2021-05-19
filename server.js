var fs = require('fs');
var dir = '/home/jarvis/code/';

const WebSocket = require('ws');
const wso = new WebSocket.Server({ port: 8080 });

wso.on('connection', function connection(ws, req) {
  console.log('connected')
  ws.send('Welcome');

  ws.on('message', incoming = (data) => {
    const parsedData = JSON.parse(data)
    const splittedData = parsedData.command.split('_')
    
    switch(splittedData[0]) {
      case 'createDir':
        const path = dir + splittedData[1];
        if (!fs.existsSync(path)) fs.mkdirSync(path);
        ws.send('created the directory')
        break;
      case 'workModeEnabled':
        ws.send("Work mode enable! I'm sure we'll be focused for AT LEAST 7 minutes this time!")
        ws.send("PlayWeBuiltThisCity")
        break;
      case 'orderPizza':
        ws.send('Sending the pizza right now')
        break;
      case 'salutation':
        ws.send('Hello to you')
        break;
      case 'stopMusic':
        ws.send('Awww... it was my favorite tune! .. Stoping it..')
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
