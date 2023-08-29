import { Router } from "express";
import { createPet, createPetId, deletePets, getPets, updatePet } from "../controller/petsController.js";

const petsRouter = new Router;

petsRouter
    .post("/pets", createPet)
    .post("/pets/:id", createPetId) // id ist die ID vom RaceModel
    .get("/pets", getPets)
    .patch("/pets/:id", updatePet)
    .delete("/pets/:id", deletePets)


export default petsRouter;