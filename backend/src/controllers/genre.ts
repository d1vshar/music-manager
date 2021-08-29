import express from 'express';
import { getAllGenres } from '../db/Genre';
// import logger from '../../config/winston';

const router = express.Router();

router.get('/', (req, res) => {
  getAllGenres((result, err) => {
    if (err) res.json(err);
    else res.json(result);
  });
});

export default router;
