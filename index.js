const express = require('express')
const { Server } = require('wss');
const controller = require('./controller')

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 3000

const server = express().listen(PORT, () => console.log(`Listening on ${PORT}`))
const wso = new Server({ server });

wso.on('connection', (ws) => {
  console.log('connected')
  ws.send('Welcome');
  ws.on('message', (data) => controller(ws, data));
});

wso.on('close', () => console.log('disconnected'));
