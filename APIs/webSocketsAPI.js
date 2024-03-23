/*
    Web sockets are type of connection
    established between a client and a server,
    a two way connection/channel, a persistant
    way to connect to the server
*/

const socket = new WebSocket('ws://example.com/socket');
socket.onmessage = (event) => {
  console.log(event.data);
};
socket.send('Hello Server!');