import expess from 'express';
import socketio from 'socket.io';
import http from 'http';
import cors from 'cors';

import messageService from './app/messaging/messageservice';

const app = expess();
const server = http.createServer();
const io = socketio(server, { origins: '*:*' });

//Allow CORS
app.use(cors());

//Setup messaging service
messageService();

server.listen(process.env.PORT || 5000, () =>
  console.log(`🚀 Server has started on port 5000`)
);
