import express, {
  NextFunction,
  Request,
  Response,
  ErrorRequestHandler,
} from 'express';
import createError from 'http-errors';
import path from 'path';
import cookieParser from 'cookie-parser';
import expressJSDocSwagger from 'express-jsdoc-swagger';
import dotenv from 'dotenv';

// --- Load env variables
dotenv.config();

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

// -- Swagger Config
const options = {
  info: {
    version: '1.0.0',
    title: 'INCEDO Artists',
    description: 'Last.fm api wrapper',
  },
  baseDir: __dirname,
  // Glob pattern to find your jsdoc files (multiple patterns can be added in an array)
  filesPattern: ['./routes/*.ts', './routes/*.js'],
  // URL where SwaggerUI will be rendered
  swaggerUIPath: '/api-docs',
  // Expose OpenAPI UI
  exposeSwaggerUI: true,
  // Expose Open API JSON Docs documentation in `apiDocsPath` path.
  exposeApiDocs: true,
  // Open API JSON Docs endpoint.
  apiDocsPath: '/api-docs',
  // Set non-required fields as nullable by default
  notRequiredAsNullable: false,
};
expressJSDocSwagger(app)(options);

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
