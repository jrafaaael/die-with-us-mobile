import { io } from "socket.io-client";

const socket = io("http://192.168.1.15:3001");

export default socket;
