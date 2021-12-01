import express from 'express';
const router = express.Router();
import ArtistController from './../controllers/artist_controller';

const artistController = new ArtistController();

router.get('/', artistController.getArtistsByName);

export default router;
