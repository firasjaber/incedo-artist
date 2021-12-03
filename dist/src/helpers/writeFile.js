"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeFile = void 0;
const csv_writer_1 = require("csv-writer");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
function writeFile(filename, data) {
    return __awaiter(this, void 0, void 0, function* () {
        const logDirectory = path_1.default.join(__dirname, './../../out/');
        fs_1.default.existsSync(logDirectory) || fs_1.default.mkdirSync(logDirectory);
        const csvWriter = (0, csv_writer_1.createObjectCsvWriter)({
            path: path_1.default.join(logDirectory, `${filename}.csv`),
            header: [
                { id: 'name', title: 'name' },
                { id: 'mbid', title: 'mbid' },
                { id: 'image_small', title: 'image_small' },
                { id: 'image', title: 'image' },
            ],
        });
        try {
            yield csvWriter.writeRecords(data);
            return true;
        }
        catch (error) {
            console.log(error);
            return false;
        }
    });
}
exports.writeFile = writeFile;
