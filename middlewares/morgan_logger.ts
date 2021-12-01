import express from 'express';
import morgan from 'morgan';
import path from 'path';
import fs from 'fs';

const router = express.Router();

// -- Write access logs to a file on production
if (process.env.NODE_ENV === 'production') {
  // -- Ensures log directory is present
  const logDirectory = path.join(__dirname, '../Logs');
  fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);
  // -- Setup the router to write to the file
  router.use(
    morgan('combined', {
      stream: fs.createWriteStream(path.join(logDirectory, 'access.log'), {
        flags: 'a',
      }),
    })
  );
}

// -- Simply write logs to console in development
if (process.env.NODE_ENV === 'development') {
  router.use(morgan('dev'));
}

export default router;
