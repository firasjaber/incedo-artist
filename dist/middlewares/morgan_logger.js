"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const router = express_1.default.Router();
if (process.env.NODE_ENV === 'production') {
    const logDirectory = path_1.default.join(__dirname, '../Logs');
    fs_1.default.existsSync(logDirectory) || fs_1.default.mkdirSync(logDirectory);
    router.use((0, morgan_1.default)('combined', {
        stream: fs_1.default.createWriteStream(path_1.default.join(logDirectory, 'access.log'), {
            flags: 'a',
        }),
    }));
}
if (process.env.NODE_ENV === 'development') {
    router.use((0, morgan_1.default)('dev'));
}
exports.default = router;
