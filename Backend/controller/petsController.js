import  {PetModel}  from "../models/pets.js";


export const getPets = async (req, res) => {
    try {
        const pets = await PetModel.find();
        res.send(pets);
    } catch (error) {
        console.error(error);
    }

}

export const createPet = async (req, res) => {
    const petData = req.body;
    const newPets = new PetModel(petData);
    try {
        await newPets.save()
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