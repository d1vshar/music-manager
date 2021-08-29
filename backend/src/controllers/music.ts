import express from 'express';
// import logger from '../../config/winston';
import {
  createMusic,
  deleteMusicById,
  getAllMusic,
  getMusicById,
} from '../db/Music';
import { MusicDto } from '../dto/types';

const router = express.Router();

router.get('/', (req, res) => {
  getAllMusic((result, err) => {
    if (err) res.json(err);
    else res.json(result);
  });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  getMusicById(id, (result, err) => {
    if (err) res.json(err);
    else res.json(result);
  });
});

router.post('/new', (req, res) => {
  const newMusic: MusicDto = req.body;
  createMusic(newMusic, (result, err) => {
    if (err) res.json(err);
    else res.json(result);
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  deleteMusicById(id, (result, err) => {
    if (err) res.json(err);
    // else res.json(result);
  });
});

export default router;
