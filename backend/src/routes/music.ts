import express from "express";
import logger from "../../config/winston";
import { createMusic, deleteMusicById, getMusicById, updateMusic } from "../db/MusicOps";

const router = express.Router();

router.get("/music/:id", (req, res) => {
    const id: string = req.params.id;
    const music = getMusicById(id);

    const data = music === null ? {} : music;
    res.send(data);
});

router.post("/music/new", (req, res) => {
    const newMusic: Music = req.body;
    createMusic(newMusic);
});

router.post("/music/update", (req, res) => {
    const updatedMusic: Music = req.body;

    updateMusic(updatedMusic);
})

router.delete("/music/:id", (req, res) => {
    const id: string = req.params.id;

    deleteMusicById(id);
})