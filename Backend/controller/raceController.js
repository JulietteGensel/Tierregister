import {RaceModel} from "../models/race.js";
// erstmal race erstellen
export const getRaces = async (req, res) => {
    try {
        const races = await RaceModel.find();
        res.send(races);
    } catch (error) {
        console.error(error);
    }

}



export const createRace = async (req, res) => {
    const raceData = req.body;
    const race = new RaceModel(raceData);
    try {
        await race.save();
        res.send("raceInfo gespeichert")
    } catch(error){
        console.error(error)
    }
}


export const updateRace = async (req, res) => {
    const raceId = req.params.id; 
    try {
        const updateRace = await RaceModel.findByIdAndUpdate(raceId, req.body, {new: true});
        res.json(updateRace);
    } catch(error) {
        console.error(error);
    }
}


export const deleteRace = async (req, res) => {
    const raceId = req.params.id; 
    try {
        const deleteRace = await RaceModel.findByIdAndDelete(raceId, req.body);
        res.send("order deleted",deleteRace);
    } catch(error) {
        console.error(error);
    }
}