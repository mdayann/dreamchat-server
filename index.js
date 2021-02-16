const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketio(server, { origins: '*:*' });

//Allow CORS
app.use(cors());

//Parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//Parse requests of content-type - application/json
app.use(bodyParser.json());

require('./app/controllers/socketio/socketio')(io);
require('./app/routes/routes')(app);

server.listen(process.env.PORT || 5000, () => console.log(`🚀 Server has started on port 5000`));
