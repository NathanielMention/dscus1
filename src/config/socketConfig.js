import openSocket from "socket.io-client";
let socket = openSocket(process.env.CLIENT_SOCKET || "http://localhost:5001");
/* 
DB_USER=tifetwhqjlxwld
DB_PASS=d9cecd6825145c91a8037d4a5c5510d5d2085d61fa902140237c24cfc7fd2540
DATABASE=d849et51nngsf7
DB_PORT=5432
DB_HOST=ec2-3-224-8-189.compute-1.amazonaws.com
DATABASE_URL=postgres://tifetwhqjlxwld:d9cecd6825145c91a8037d4a5c5510d5d2085d61fa902140237c24cfc7fd2540@ec2-3-224-8-189.compute-1.amazonaws.com:5432/d849et51nngsf7
*/
export default socket;
