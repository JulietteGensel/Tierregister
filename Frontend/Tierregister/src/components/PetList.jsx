import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function PetList() {
  const [pets, setPets] = useState([]);

  const fetchPets = async () => {
    const data = await fetch("http://localhost:4001/pets");
    const json = await data.json();
    console.log(json);
    setPets(json);
  };

  useEffect(() => {
    fetchPets();
  }, []);

  const handleDelete = async (id) => {
    await fetch(`http://localhost:4001/pet/${id}`, {
      method: "DELETE",
    });
    await fetchPets();
  };

  return (
    <>
      <div style={{ backgroundColor: "#f2f2f2", padding: "20px" }}>
        <h1 style={{ color: "#333", marginBottom: "20px", backgroundColor: "#f2f2f2", padding: "10px", borderRadius: "4px" }}>
          Pets
        </h1>
        <div style={{ marginBottom: "20px" }}>
          <button
            style={{
              padding: "10px 20px",
              background: "gray",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            <Link to="/new" style={{ color: "#fff", textDecoration: "none" }}>
              Create New Pet
            </Link>
          </button>
        </div>

        <ul style={{ listStyle: "none", display: "flex", flexDirection: "column" }}>
          {pets.map((pet) => (
            <li
              key={pet._id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "10px",
                background: "#fff",
                padding: "10px",
                borderRadius: "4px",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div style={{ color: "#333" }}>{`${pet.name} by ${pet.animal}`}</div>
              <div>
                <button
                  onClick={() => handleDelete(pet._id)}
                  style={{
                    marginLeft: 20,
                    marginRight: 5,
                    padding: "5px 10px",
                    background: "#e91e63",
                    color: "#fff",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  Delete
                </button>
                <button
                  style={{
                    padding: "5px 10px",
                    background: "#3f51b5",
                    color: "#fff",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  <Link to={`edit/${pet._id}`} style={{ color: "#fff", textDecoration: "none" }}>
                    Edit
                  </Link>
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default PetList;
