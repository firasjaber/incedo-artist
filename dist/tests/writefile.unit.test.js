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
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const csv_parser_1 = __importDefault(require("csv-parser"));
const helpers_1 = require("../src/helpers");
describe('File writer unit tests', () => {
    let mockData = [
        {
            name: 'Eminem',
            mbid: '123',
            image_small: 'https://placeholderimage.com',
            image: 'https://placeholderimage.com',
        },
    ];
    let filename = 'testfile';
    let outPath = path_1.default.join(__dirname, '../out/') + filename + '.csv';
    test('csv file created', () => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, helpers_1.writeFile)(filename, mockData);
        expect(fs_1.default.existsSync(outPath)).toBe(true);
    }));
    test('data written succesfully', () => __awaiter(void 0, void 0, void 0, function* () {
        let results = [];
        fs_1.default.createReadStream(outPath)
            .pipe((0, csv_parser_1.default)())
            .on('data', (data) => results.push(data))
            .on('end', () => {
            expect(results).toStrictEqual(mockData);
            if (fs_1.default.existsSync(outPath))
                fs_1.default.unlinkSync(outPath);
        });
    }));
});
