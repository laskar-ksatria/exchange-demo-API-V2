//Utils
import express from 'express';
import http from 'http';
import SocketIo from 'socket.io';
import { config } from 'dotenv';
import cors from 'cors';

//other things
import MainRoute from './routes/routes';
import { MONGODB_CONNECT } from './configs/DBConnect';
import { WebSocketCrypto } from './configs/WebSocket';
import { ErrHandler } from './middlewares/error-handler';

//variables
const app = express();
const server = http.createServer(app);
const PORT = 3006;
const Io = SocketIo(server)

//Running config
config();
MONGODB_CONNECT();
WebSocketCrypto();

console.log(process.env.SECRET_CODE)

//app.use
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Main route
app.use(MainRoute);

//Error handler
app.use(ErrHandler);

server.listen(PORT, () => console.log("Server running on 3006"));