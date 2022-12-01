import openSocket from "socket.io-client";
let socket = openSocket(
  process.env.CLIENT_SOCKET || "https://dscus1.herokuapp.com"
);

export default socket;
