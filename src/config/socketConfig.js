import openSocket from "socket.io-client";
let socket = openSocket(process.env.CLIENT_SOCKET || "/");

export default socket;
