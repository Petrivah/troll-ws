let url = 'http://localhost';

// let socket = io(url);
let socket = io();
socket.on('eval', eval);

