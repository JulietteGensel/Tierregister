import express from "express";
import cors from 'cors'
import { connectMongoose } from "./util/connectMongoose.js";
import "dotenv/config";// import dotenv from "dotenv";
import petsRouter from "./router/petsRouter.js";
import raceRouter from "./router/raceRouter.js";  
// import jwt from "jsonwebtoken";

//dotenv.config()
const PORT = process.env.PORT || 5000;

const app = express();

const connected = await connectMongoose();

app.use(cors());
app.use(express.json())

app.use(petsRouter) 
app.use(raceRouter) 


if(connected){
    app.listen(PORT, () => {
        console.log(`app listening on port ${PORT}`);
    })
} else {
    console.error("Verbindung zu mongodb nicht möglich.")
}
