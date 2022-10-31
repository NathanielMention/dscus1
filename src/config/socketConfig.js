import openSocket from "socket.io-client";
let socket = openSocket("https://dscusbackend.onrender.com:5001");

export default socket;
