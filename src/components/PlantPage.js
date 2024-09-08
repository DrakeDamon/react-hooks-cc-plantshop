import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({allPlants, handleSubmit, handleFilter }) {
  return (
    <main>
      <NewPlantForm onFormSubmit={handleSubmit} />
      <Search handleFilter={handleFilter}/>
      <PlantList allPlants={allPlants} />
    </main>
  );
}

export default PlantPage;
