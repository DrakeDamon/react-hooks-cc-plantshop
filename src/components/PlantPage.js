import {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";



function PlantPage() {

  const [allPlants, setAllPlants] = useState([]);
  const [search, setSearch] = useState(''); 

  useEffect(() => {
    fetch('http://localhost:6001/plants')
      .then((res) => res.json())
      .then((data) => {
        setAllPlants(data); 
      });
  }, []);


  const handleSubmit = (newPlant) => {
    setAllPlants((prevPlants) => [...prevPlants, newPlant]);
  };

  const displayPlants = allPlants.filter((plant) =>
  plant.name.toLowerCase().includes(search.toLowerCase())
);

const updatePrice = (id, newPrice) => {
  fetch(`http://localhost:6001/plants/${id}`, {
    method: "PATCH", 
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ price: newPrice }), 
  })
    .then((res) => res.json())
    .then((updatedPlant) => {
      setAllPlants((prevPlants) =>
        prevPlants.map((plant) =>
          plant.id === updatedPlant.id ? updatedPlant : plant
        )
      );
    })
};

const deletePlant = (id) => {
  fetch(`http://localhost:6001/plants/${id}`, {
    method: "DELETE",
  })
    .then(() => {
      setAllPlants((prevPlants) =>
        prevPlants.filter((plant) => plant.id !== id)
      );
    })
    .catch((error) => console.error("Error deleting plant:", error));
};
  


  return (
    <main>
      <NewPlantForm onFormSubmit={handleSubmit} />
      <Search onSearch={setSearch}/>
      <PlantList allPlants={displayPlants} updatePrice={updatePrice} deletePlant={deletePlant} />
    </main>
  );
}

export default PlantPage;
