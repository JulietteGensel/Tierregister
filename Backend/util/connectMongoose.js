import mongoose from "mongoose";


async function connectMongoose() {
    // Einstellungen, um mit Atlas mongoDB zu verbinden
  const _pwd = process.env.MONGO_DB_PWD;
  const _database = "Tiere";
  const _user = process.env.MONGO_DB_USER; 
  const _cluster = "cluster0.bizkhzy.mongodb.net"; 
  console.log(_pwd,_user)
  const _uri = `mongodb+srv://${_user}:${_pwd}@${_cluster}/${_database}?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(_uri);
    // Zeigt collections der Datenbank (also _database) an
    const collections =  (await mongoose.connection.db.listCollections().toArray()).map(el => el.name);
    console.log(`collections of '${_database}' db`, collections );
    return true;
  } catch (error) {
    console.error('Could not connect to mongoose', error);
    return false;
  }
}

export { connectMongoose }