import { Server } from 'ws';
const server = new Server({ port: 8080 });

server.on('connection', socket => {

    socket.on('message', message => {

        socket.send(`Roger that! ${message}`);

    });

});