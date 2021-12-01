import express from 'express';
const router = express.Router();
import ArtistController from './../controllers/artist_controller';

const artistController = new ArtistController();

router.get('/', artistController.getArtistsByName);
router.get('/csv', artistController.getArtistsByName);

export default router;
