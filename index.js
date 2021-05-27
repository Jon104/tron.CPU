const WebSocket = require('ws');
const wso = new WebSocket.Server({ port: 8080 });
const controller = require('./controller')

wso.on('connection', connection = (ws, req) => {
  console.log('connected')
  ws.send('Welcome');
  ws.on('message', incoming = (data) => controller(ws, data));
});

wso.on('close', close = () => console.log('disconnected'));
