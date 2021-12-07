import express from 'express';
const router = express.Router();
import ArtistController from './../controllers/artist_controller';

const artistController = new ArtistController();

/**
 * GET /artists/
 * @tags Artists
 * @summary Return artists matches by name, and save the a specified file
 * @param {string} name.query.required Artists name
 * @param {string} filename.query.required Name of a file to save the results to
 * @return {object} 201 - success response with valid artist
 * @example response - 201 - success response example
 * {
 * 		"success" : true,
 * 		"data" : [
 * 				{
 * 					"name" : "Logic",
 * 					"listeners" : "828975",
 * 					"mbid" : "b2f45ca6-2c92-438c-b037-ad4d8b92e90e",
 * 					"url" : "https://www.last.fm/music/Logic",
 * 					"image" : [
 * 							{
 * 									"#text" : "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
 * 									"size" : "small"
 * 							}
 * 					]
 * 				}
 * 		]
 * }
 * @return {object} 200 - success response with invalid artist
 * @example response - 200 - success response with invalid artist
 * {
 * 		"success" : true,
 * 		"data" : [
 * 				{ "name" : "mcfirrj" },
 * 				{ "name" : "lil usersina"},
 * 				{ "name" : "nimo" }
 * 		]
 * }
 * @return {object} 400 - missing param
 * @example response - 400 - missing name param
 * {
 * 		"success" : false,
 * 		"message" : "missing param : name"
 * }
 * @example response - 400 - missing filename param
 * {
 * 		"success" : false,
 * 		"message" : "missing param : filename"
 * }
 * @return {object} 500 - internal error response
 * @example response - 500 - error while writing the file
 * {
 * 		"success" : false,
 * 		"message" : "error occured while saving the file"
 * }
 * @example response - 500 - internal server error
 * {
 * 		"success" : false,
 * 		"message" : "internal error"
 * }
 */
router.get('/', artistController.getArtistsByName);

export default router;
