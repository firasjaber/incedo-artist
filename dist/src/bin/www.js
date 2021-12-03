"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const app_1 = __importDefault(require("./../../app"));
const http_1 = __importDefault(require("http"));
const PORT = process.env.PORT || 8000;
app_1.default.set('port', PORT);
const server = http_1.default.createServer(app_1.default);
server.listen(PORT);
server.on('listening', () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
server.on('error', (error) => {
    if (error.syscall !== 'listen') {
        throw error;
    }
    switch (error.code) {
        case 'EACCES':
            console.error(`Port ${PORT} requires elevated privileges`);
            process.exit(1);
        case 'EADDRINUSE':
            console.error(`Port ${PORT} is already in use`);
            process.exit(1);
        default:
            throw error;
    }
});
