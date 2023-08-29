import { useState } from "react";
import { useNavigate } from "react-router-dom";

function PetForm() {
  const [pet, setPet] = useState({});
  
  const navigate = useNavigate();

  const changePetHandler = (key, value) => {
    setPet((prevState) => {
      return {
        ...prevState,
        [key]: value
      };
    });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    await fetch(`http://localhost:4001/pets/${pet.breedId}`, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(pet)
    });
  };

  const goHome = () => {
    navigate("/"); // Navigiere zur Home-Seite
  };

  return (
    <form>
      <label>Name</label> <input value={pet.name} onChange={(event) => changePetHandler("name", event.target.value)} />
      <label>Animal</label> <input value={pet.animal} onChange={(event) => changePetHandler("animal", event.target.value)} />
      <label>Breed</label> <select name="breed"  onChange={(event) => changePetHandler("breedId", event.target.value)}> 
        <option value="DOGID" >dog</option> {/* Hier muss die id aus der datanbank rein*/}
        <option value="64e749aa4879971a91ef45fb"> cat</option>
        </select>
      <label>Age</label> <input value={pet.age} onChange={(event) => changePetHandler("age", event.target.value)} />
      <button onClick={(event) => submitHandler(event)}>Submit</button>
      <button onClick={goHome}>Go to Home</button> {/* Hinzugefügter "Zurück"-Button */}
    </form>
  );
}

export default PetForm;
