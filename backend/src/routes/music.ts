import express from 'express';
import logger from '../../config/winston';
import {
  createMusic,
  deleteMusicById,
  getMusicById,
  updateMusic,
} from '../db/MusicOps';
import { Music } from '../db/types';

const router = express.Router();

router.get('/music/:id', (req, res) => {
  const { id } = req.params;
  const music = getMusicById(id);

  const data = music === null ? {} : music;
  res.send(data);
});

router.post('/music/new', (req, res) => {
  const newMusic: Music = req.body;
  createMusic(newMusic)
    .then((r) => res.json(r))
    .catch((err) => {
      logger.error(`Failed insertion music: ${JSON.stringify(err)}`);
    });
});

router.post('/music/update', (req) => {
  const updatedMusic: Music = req.body;

  updateMusic(updatedMusic);
});

router.delete('/music/:id', (req) => {
  const { id } = req.params;

  deleteMusicById(id);
});

export default router;
