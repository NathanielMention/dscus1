import openSocket from "socket.io-client";
let socket = openSocket(
  process.env.CLIENT_SOCKET || "https://dscusbackend.onrender.com"
);

export default socket;
