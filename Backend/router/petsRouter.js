import { Router } from "express";
import { createPet, deletePets, getPets, updatePet } from "../controller/petsController.js";

const petsRouter = new Router;

petsRouter
    .post("/pets/:id", createPet) // id ist die ID vom RaceModel
    .get("/pets", getPets)
    .patch("/pets/:id", updatePet)
    .delete("/pets/:id", deletePets)


export default petsRouter;