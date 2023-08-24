import express from "express";
import { connectMongoose } from "./util/connectMongoose.js";
import "dotenv/config";// import dotenv from "dotenv";
import petsRouter from "./router/petsRouter.js";// a changer le nom par ex tierRegisterRouter
import raceRouter from "./router/raceRouter.js"; // a changer le nom par ex raceInfoRouter 
// import jwt from "jsonwebtoken";


//dotenv.config()
const PORT = process.env.PORT || 5000;

const app = express();

const connected = await connectMongoose();

app.use(express.json())

app.use(petsRouter) // a changer le nom
app.use(raceRouter) // a changer le nom


if(connected){
    app.listen(PORT, () => {
        console.log(`app listening on port ${PORT}`);
    })
} else {
    console.error("Verbindung zu mongodb nicht möglich.")
}
