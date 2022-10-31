import openSocket from "socket.io-client";
let socket = openSocket("http://localhost:5001");
if (process.env.NODE_ENV === "production") {
  socket = openSocket("https://dscus.onrender.com:5001");
}

export default socket;
