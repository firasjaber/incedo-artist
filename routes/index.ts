import express from 'express';
const router = express.Router();

router.get('/', function (_req, res) {
  res.json({ message: 'Api is responding successfully' });
});

export default router;
