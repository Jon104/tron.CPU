const express = require('express')
const { Server } = require('ws');
const controller = require('./controller')

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 8080

const server = express()
  // eslint-disable-next-line no-undef
  .use((req, res) => res.sendFile('./index.html', { root: __dirname }))
  .listen(PORT, () => console.log(`Listening on ${PORT}`))
const wso = new Server({ server });

wso.on('connection', (ws) => {
  console.log('connected')
  ws.send("Hello friend, here's Jarvis");
  ws.on('message', (data) => controller(ws, data));
});

wso.on('close', () => console.log('disconnected'));
