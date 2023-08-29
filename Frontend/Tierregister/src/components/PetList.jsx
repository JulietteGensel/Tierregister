import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function PetList() {
  const [pets, setPets] = useState([]);
  const [deletedSuccess, setDeletedSuccess] = useState(false)

  const fetchPets = async () => {
    try {
      const response = await fetch("http://localhost:4001/pets");
      if (response.ok) {
        const data = await response.json();
        setPets(data);
      } else {
        console.error("Error fetching pets:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching pets:", error);
    }
  };

  useEffect(() => {
    fetchPets();
  }, [deletedSuccess]);

  

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:4001/pets/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        console.log('Pet successfully deleted')
        await fetchPets();
      } else {
        console.error("Error deleting pet:", response.statusText);
      }
    } catch (error) {
      console.error("Error deleting pet:", error);
    }
  };

  

  return (
    <>
      <div style={{ backgroundColor: "#F2F2F2", padding: "20px" }}>
        <h1 style={{ color: "#333", marginBottom: "20px", backgroundColor: "#F2F2F2", padding: "10px", borderRadius: "4px" }}>
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
                    background: "#E91E63",
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
                    background: "#3F51B5",
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
