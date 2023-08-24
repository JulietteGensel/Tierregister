import { Router } from "express";
import { createRace, deleteRace, getRaces, updateRace } from "../controller/raceController.js";

const raceRouter = new Router;

raceRouter
    .post("/races/:id", createRace) // changer de route si sa derange
    .get("/races", getRaces)
    .patch("/races/:id", updateRace)
    .delete("/races/:id", deleteRace)


export default raceRouter;