const process = require('dotenv').config();
const WebSocket = require('ws');

const port = process.env.PORT || 8080
const wso = new WebSocket.Server({ port: port });
const controller = require('./controller')

wso.on('connection', (ws) => {
  console.log('connected')
  ws.send('Welcome');
  ws.on('message', (data) => controller(ws, data));
});

wso.on('close', () => console.log('disconnected'));
