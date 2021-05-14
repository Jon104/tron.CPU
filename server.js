const WebSocket = require('ws');
const wso = new WebSocket.Server({ port: 8080 });

wso.on('open', function open() {
  ws.send('something');
});

wso.on('connection', function connection(ws, req) {
  console.log('connected')
  ws.send('something');
  ws.on('message', incoming = (data) => {
    const parsedData = JSON.parse(data)
    console.log(parsedData.command)
    switch(parsedData.command) {
      case 'I would like to order a pizza':
        ws.send('Sending the pizza right now')
        break;
      case 'salutation':
        ws.send('Yolo baby')
        break;
      default:
        ws.send('Sorry mate, not supported')
    }
  });
});

wso.on('close', function close() {
  console.log('disconnected');
});
