import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ allPlants }) {
  return (
    <ul className="cards">{allPlants.map(plant => <PlantCard key={plant.id} plant={plant}/>)}</ul>
  );
}

export default PlantList;
