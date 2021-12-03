// -- Find and load .env file if any
require('dotenv').config();

import app from './../../app';
import http from 'http';

// -- Get port from environment variables or use default
const PORT = process.env.PORT || 8000;
app.set('port', PORT);

// -- Create HTTP server & listen on provided port
const server = http.createServer(app);
server.listen(PORT);

// -- If the server is launched successfully
server.on('listening', () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
// -- If an error occurs launching the server
server.on('error', (error: NodeJS.ErrnoException) => {
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
