import express from 'express';
import { getAllPlaylists } from '../db/Playlist';
// import logger from '../../config/winston';

const router = express.Router();

router.get('/', (req, res) => {
  getAllPlaylists((result, err) => {
    if (err) res.json(err);
    else res.json(result);
  });
});

export default router;
