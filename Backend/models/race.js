import mongoose from 'mongoose';

const raceSchema = new mongoose.Schema({
  name: String,
  description: String,
  // Weitere Felder hier...
});



export const RaceModel = mongoose.model('Races', raceSchema);

/*export default RaceModel;



export const RaceModel = mongoose.model('Races', raceSchema);*/
 