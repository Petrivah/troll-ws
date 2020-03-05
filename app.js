let app = require('express')()
  , server = require('http').Server(app)
  , io = require('socket.io')(server);

server.listen(3000);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/hacker.js', (req, res) => {
  res.sendFile(__dirname + '/hacker.js');
});

app.get('/script.js', (req, res) => {
  res.sendFile(__dirname + '/script.js');
});

io.on('connection', function (socket) {
  socket.on('eval', data => socket.broadcast.emit('eval', data));
});