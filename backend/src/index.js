const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const app = express();

// Conexoes http e websocket
const server = require('http').Server(app);
const io = require('socket.io')(server);

mongoose.connect(
  'mongodb+srv://<username>:<password>@cluster0-xyulq.mongodb.net/test?retryWrites=true&w=majority',
  {
    useNewUrlParser: true // confirmar a utilização de string para conectar com o mongo
  }
);

// executar os middlewares em toda a aplicação
app.use((req, res, next) => {
  req.io = io;
  next();
});

app.use(cors());

app.use(
  '/files',
  express.static(path.resolve(__dirname, '..', 'uploads', 'resized'))
);

app.use(require('./routes'));

server.listen(3333);
