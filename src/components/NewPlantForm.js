import React, { useState } from "react";

function NewPlantForm({ onFormSubmit }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); 


    const newPlant = { 
      name: name.trim(),  
      image: image.trim(),  
      price: parseFloat(price)  
    };


    fetch('http://localhost:6001/plants', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify(newPlant) 
    })
    .then((res) => res.json()) 
    .then((data) => {
      console.log("New Plant Added to Server:", data); 
      onFormSubmit(data); 
    })
    .catch((error) => console.error('Error adding new plant:', error)); 

    setName("");
    setImage("");
    setPrice("");
  };

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Plant name"
          value={name}
          onChange={(e) => setName(e.target.value)} // Correctly update state on change
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)} // Correctly update state on change
        />
        <input
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)} // Correctly update state on change
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
