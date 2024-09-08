import { useState, useEffect } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [allPlants, setAllPlants] = useState([]);
  const [filteredPlants, setFilteredPlants] = useState([]); // Initialize as an empty array

  useEffect(() => {
    fetch('http://localhost:6001/plants')
      .then((res) => res.json())
      .then((data) => {
        setAllPlants(data);
        setFilteredPlants(data); // Initialize filteredPlants with all plants
      });
  }, []);

  const handleSubmit = (newPlant) => {
    setAllPlants((prevPlants) => [...prevPlants, newPlant]);
    setFilteredPlants((prevPlants) => [...prevPlants, newPlant]); // Keep both states in sync
  };

  const handleFilter = (query) => {
    // Use allPlants directly to filter based on the query
    const filtered = allPlants.filter((plant) =>
      plant.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredPlants(filtered);
  };

  return (
    <div className="app">
      <Header />
      <PlantPage
        allPlants={filteredPlants} // Pass filtered plants to PlantPage
        handleSubmit={handleSubmit}
        handleFilter={handleFilter}
      />
    </div>
  );
}

export default App;
