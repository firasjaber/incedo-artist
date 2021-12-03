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
const axios_1 = __importDefault(require("axios"));
const helpers_1 = require("./../helpers");
class ArtistController {
    getArtistsByName(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, filename } = req.query;
                if (!name) {
                    return res
                        .status(400)
                        .json({ success: false, error: 'missing params : name' });
                }
                let URL = `https://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${name}&api_key=8eab9cd2c818d7833494ff5242f70141&format=json`;
                const { data } = yield axios_1.default.get(URL);
                const artists = data.results.artistmatches.artist;
                if (filename) {
                    const csvData = artists.map((artist) => (0, helpers_1.mapToCSV)(artist));
                    let fileWritten = yield (0, helpers_1.writeFile)(filename, csvData);
                    if (!fileWritten)
                        return res
                            .status(400)
                            .json({
                            success: false,
                            message: 'error occured while saving the file',
                        });
                }
                return res.status(200).json({ success: true, data: artists });
            }
            catch (error) {
                console.log(error);
                res.status(500).json({ success: false, message: 'internal error' });
            }
        });
    }
}
exports.default = ArtistController;
