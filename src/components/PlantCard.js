import {useState} from "react";

function PlantCard({plant, onUpdatePrice, onDeletePlant }) {
const[inStock, setInStock]=useState(true)
const[newPrice, setNewPrice]=useState(plant.price)

const handleClick = () => {
  setInStock(!inStock)
}

const handlePriceChange = (e) => {
setNewPrice(e.target.value)
}

const handleUpdatePrice = () => {
  onUpdatePrice(plant.id, parseFloat(newPrice))
}

const handleDelete = () => {
  onDeletePlant(plant.id)
}



  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={"plant name"} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      <input
        type="number"
        value={newPrice}
        onChange={handlePriceChange} // Update new price input state on change
        step="0.01"
      />
      <button onClick={handleUpdatePrice}>Update Price</button> 
      {inStock ? (
        <button onClick={handleClick} className="primary">In Stock</button>
      ) : (
        <button onClick={handleClick} >Out of Stock</button>
      )}
       <button onClick={handleDelete}>Delete</button> 
    </li>
  );
}

export default PlantCard;
