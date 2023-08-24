import mongoose from "mongoose";

const petSchema = new mongoose.Schema({
    name: String,
    animal: String,
    breed: { type: mongoose.Schema.Types.ObjectId, ref: 'Race' },
    age: Number,
    // Weitere Felder hier...
  });

 

export const PetModel = mongoose.model('Pet', petSchema);

/*export default PetModel;

export const PetModel = mongoose.model("Pets", petSchema);*/