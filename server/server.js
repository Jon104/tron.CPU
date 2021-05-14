const WebSocket = require('ws');
const wso = new WebSocket.Server({ port: 8080 });

wso.on('open', function open() {
  ws.send('something');
});

wso.on('connection', function connection(ws, req) {
  console.log('connected')
  ws.send('something');
  ws.on('message', function incoming(data) {
    console.log(data);
  });
});

wso.on('close', function close() {
  console.log('disconnected');
});
