import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ allPlants, updatePrice, deletePlant }) {
  return (
    <ul className="cards">{allPlants.map(plant => <PlantCard key={plant.id} plant={plant} onUpdatePrice={updatePrice} onDeletePlant={deletePlant}/>)}</ul>
  );
}

export default PlantList;
