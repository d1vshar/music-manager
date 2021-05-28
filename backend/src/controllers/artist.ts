import express from 'express';
import { getAllArtists } from '../db/Artist';
// import logger from '../../config/winston';

const router = express.Router();

router.get('/', (req, res) => {
  getAllArtists((result, err) => {
    if (err) res.json(err);
    else res.json(result);
  });
});

export default router;
