"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_errors_1 = __importDefault(require("http-errors"));
const path_1 = __importDefault(require("path"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const morgan_logger_1 = __importDefault(require("./middlewares/morgan_logger"));
const artists_1 = __importDefault(require("./routes/artists"));
const app = (0, express_1.default)();
app.use(morgan_logger_1.default);
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
app.use('/artists', artists_1.default);
const errorHandler = (err, _req, res, _next) => {
    res
        .status(err.status || 500)
        .json({ code: 1, message: 'An unexpected error has occured' });
};
app.use(function (_req, _res, next) {
    next((0, http_errors_1.default)(404));
});
app.use(errorHandler);
exports.default = app;
