import express from 'express';
import logger from '../../config/winston';
import {
  createMusic,
  deleteMusicById,
  getAllMusic,
  getMusicById,
  updateMusic,
} from '../db/Music';
import { MusicDto } from '../dto/types';

const router = express.Router();

router.get('/music/', (req, res) => {
  getAllMusic((result, err) => {
    if (err) res.json(err);
    else res.json(result);
  });
})

router.get('/music/:id', (req, res) => {
  const { id } = req.params;
  getMusicById(id, (result, err) => {
    if (err) res.json(err);
    else res.json(result);
  });
});

router.post('/music/new', (req, res) => {
  const newMusic: MusicDto = req.body;
  createMusic(newMusic, (result, err) => {
    if (err) res.json(err);
    else res.json(result);
  });
});

router.post('/music/update', (req) => {
  const updatedMusic: MusicDto = req.body;

  updateMusic(updatedMusic, () => {});
});

router.delete('/music/:id', (req, res) => {
  const { id } = req.params;
  deleteMusicById(id, (result, err) => {
    if (err) res.json(err);
    // else res.json(result);
  });
});

export default router;
