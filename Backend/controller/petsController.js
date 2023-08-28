import {PetModel}  from "../models/pets.js";
import {RaceModel} from "../models/race.js";


export const getPets = async (req, res) => {
    try {
        const pets = await PetModel.find();
        res.send(pets);
    } catch (error) {
        console.error(error);
    }

}


/*export const createPet = async (req, res) => {
    const petData = req.body; // { foodItems: [{name: "banana", "price": 10}]}
    const petId = req.params.id;
    petData.pet = petId; // { foodItems: [{name: "banana", "price": 10}], table: "64ad1a4bc730d0bbd635ec35"}
    const pets = new PetModel(petData);
    try {
        const pet = await RaceModel.findById(petId);
        await pets.save();

        pet.pet.push(pets._id);
        await pet.save(); 
        res.send("pet gespeichert")
    } catch(error){
        console.error(error)
    }
}*/



export const createPet = async (req, res) => {
    const petData = req.body; // {name: "Bello", type: "dog" }
    const raceId = req.params.id; // Oder woher man die ID für die Rasse halt sonst kriegen will. 
    petData.breed = raceId;  // {name: "Bello", type: "dog", breed: "64ad1a4bc730d0bbd635ec35"}
    const pet = new PetModel(petData);
    try {
        await pet.save();
        res.send("pet gespeichert")
    } catch(error){
        console.error(error)
    }
}



export const updatePet = async (req, res) => {
    const petId = req.params.id; 
    try {
        const updatePet = await PetModel.findByIdAndUpdate(petId, req.body, {new: true});
        res.json(updatePet);
    } catch(error) {
        console.error(error);
    }
}


export const deletePets = async (req, res) => {
    const petId = req.params.id; 
    try {
        const deletePets = await PetModel.findByIdAndDelete(petId, req.body);
        res.send("table deleted",deletePets);
    } catch(error) {
        console.error(error);
    }
}