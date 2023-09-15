import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';


const AddProduct = () => {
  // Initialize state variables to store form data
  const [formData, setFormData] = useState({
    title: 'test',
    description: 'test',
    prize: 'test',
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to the API with the form data
      const response = await axios.post('https://dummyjson.com/products/add', formData);

      // Handle success (e.g., display a success message)
      console.log('Data successfully posted:', response.data); 
      toast.success(`Data Saved successfully`);

      // Optionally, reset the form fields
      setFormData({
        title: '',
        description: '',
        prize: '',
      });
    } catch (error) {
      // Handle error (e.g., display an error message)
      console.error('Error posting data:', error);
    }
  };

  return (
    <div>
      <h2>Post Data to API</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="prize">Prize:</label>
          <input
            type="text"
            id="prize"
            name="prize"
            value={formData.prize}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
