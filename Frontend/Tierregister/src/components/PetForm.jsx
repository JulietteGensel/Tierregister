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
    await fetch(`http://localhost:4001/pets`, {
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
      <label>Breed</label> <input value={pet.breed} onChange={(event) => changePetHandler("breed", event.target.value)} />
      <label>Age</label> <input value={pet.age} onChange={(event) => changePetHandler("age", event.target.value)} />
      <button onClick={(event) => submitHandler(event)}>Submit</button>
      <button onClick={goHome}>Go to Home</button> {/* Hinzugefügter "Zurück"-Button */}
    </form>
  );
}

export default PetForm;
