import openSocket from "socket.io-client";
let socket = openSocket(process.env.CLIENT_SOCKET || "http://localhost:5001");

export default socket;
