import React, { useState } from "react";

function NewPlantForm({ onFormSubmit }) {
  // Local state to manage form inputs
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Create a new plant object using state values
    const newPlant = { 
      id: Date.now(),   // Generate a unique ID for the new plant
      name: name.trim(),  // Use the state variable for the name
      image: image.trim(),  // Use the state variable for the image URL
      price: parseFloat(price).toFixed(2)  // Convert the price to a number with two decimal places
    };

    console.log("New Plant Data:", newPlant); // Debugging: log the new plant object

    // Call the function passed down from App with the new plant data
    onFormSubmit(newPlant);

    // Clear the form fields after submission
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
