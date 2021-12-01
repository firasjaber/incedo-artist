import express from 'express';
const router = express.Router();

router.get('/', function (_req, res) {
  res.json({ message: 'Return a list of users' });
});

export default router;
