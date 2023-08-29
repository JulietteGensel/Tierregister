import React from "react";

function PetList({ pets }) {
  return (
    <div>
      <h2>Haustierliste</h2>
      <ul>
        {pets.map((pet) => (
          <li key={pet._id}>
            Name: {pet.name}, Tierart: {pet.animal}, Alter: {pet.age}, Rasse: {pet.breed}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PetList;
