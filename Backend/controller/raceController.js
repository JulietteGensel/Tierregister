import {RaceModel} from "../models/race.js";
import  {PetModel}  from "../models/pets.js";

export const getRaces = async (req, res) => {
    try {
        const races = await RaceModel.find();
        res.send(races);
    } catch (error) {
        console.error(error);
    }

}

/*export const createOrder = async (req, res) => {
    const orderData = req.body; // { foodItems: [{name: "banana", "price": 10}]}
    const tableId = req.params.id;
    orderData.table = tableId; // { foodItems: [{name: "banana", "price": 10}], table: "64ad1a4bc730d0bbd635ec35"}
    const order = new OrderModel(orderData);
    try {
        const table = await TableModel.findById(tableId);
        await order.save();

        table.orders.push(order._id);
        await table.save(); 
        res.send("order gespeichert")
    } catch(error){
        console.error(error)
    }
}*/



export const createRace = async (req, res) => {
    const raceData = req.body;
    const petsId = req.params.id;
    raceData.pet = petsId;
    const race = new RaceModel(raceData);
    try {

        const pet = await PetModel.findById(petsId);
        await race.save();

        pet.races.push(race._id);
        await pet.save(); 
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