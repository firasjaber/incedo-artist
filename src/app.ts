import express, {
  NextFunction,
  Request,
  Response,
  ErrorRequestHandler,
} from 'express';
import createError from 'http-errors';
import path from 'path';
import cookieParser from 'cookie-parser';

// ---- Import middlewares
import morganLogger from './middlewares/morgan_logger';

// ---- Routes
import artistRouter from './routes/artists';

// -- Initialize app
const app = express();

// -- Setup middlewares
app.use(morganLogger);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// -- Setup routes
app.use('/artists', artistRouter);

// -- Catch & handle 404 requests
const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  res
    .status(err.status || 500)
    .json({ code: 1, message: 'An unexpected error has occured' });
};

app.use(function (_req: Request, _res: Response, next: NextFunction) {
  next(createError(404));
});

app.use(errorHandler);

export default app;
