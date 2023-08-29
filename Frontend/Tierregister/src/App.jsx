import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import PetForm from "./components/PetForm";
import PetList from "./components/PetList";
import './App.css'

function App() {
  const [pets, setPets] = useState([]);

  const addPet = (newPet) => {
    setPets((prevPets) => [...prevPets, newPet]);
  };

  return (
    <Router>
      
        <PetForm addPet={addPet} />
        <PetList pets={pets} />
      
    </Router>
  );
}

export default App;
