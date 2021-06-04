const process = require('dotenv').config();
const express = require('express')
const { Server } = require('ws');
const controller = require('./controller')

const PORT = process.env.PORT || 3000

const server = express().listen(PORT, () => console.log(`Listening on ${PORT}`))
const wso = new Server({ server });

wso.on('connection', (ws) => {
  console.log('connected')
  ws.send('Welcome');
  ws.on('message', (data) => controller(ws, data));
});

wso.on('close', () => console.log('disconnected'));
