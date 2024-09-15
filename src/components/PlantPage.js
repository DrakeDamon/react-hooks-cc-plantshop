import {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";



function PlantPage() {

  const [allPlants, setAllPlants] = useState([]);
  const [search, setSearch] = useState(''); // Initialize as an empty array

  useEffect(() => {
    fetch('http://localhost:6001/plants')
      .then((res) => res.json())
      .then((data) => {
        setAllPlants(data); // Initialize filteredPlants with all plants
      });
  }, []);


  const handleSubmit = (newPlant) => {
    setAllPlants((prevPlants) => [...prevPlants, newPlant]);
  };

  const displayPlants = allPlants.filter((plant) =>
  plant.name.toLowerCase().includes(search.toLowerCase())
);
  


  return (
    <main>
      <NewPlantForm onFormSubmit={handleSubmit} />
      <Search onSearch={setSearch}/>
      <PlantList allPlants={displayPlants} />
    </main>
  );
}

export default PlantPage;
