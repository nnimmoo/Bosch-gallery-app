import React, { useState } from 'react';
import axios from 'axios';
import { AUTH } from '../api';

function SubmitPainting(props) {
  const [formData, setFormData] = useState({
    name: '',
    imageLink: '',
    dateOfCreation: '',
    shortBio: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)
    
    const headers = {
      'Authorization': `Bearer ${AUTH}`,
      'Content-Type': 'application/json' // Assuming JSON data is being sent
    };

    try {
      const response = await axios.post('https://crudapi.co.uk/api/v1/gallery', JSON.stringify([formData]), { headers });
      console.log('POST response:', response.data);
      // Handle successful response here
      alert("good")
    } catch (error) {
      console.error('Error:', error);
      alert("bad")
    }
  };


  return (
    <div>
      <h2>Submission Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <br />
        <label>
        imageLink:
          <input type="text" name="imageLink" value={formData.imageLink} onChange={handleChange} />
        </label>
        <br />
        <label>
        dateOfCreation:
          <input type="text" name="dateOfCreation" value={formData.dateOfCreation} onChange={handleChange} />
        </label>
        <br />
        <label>
        shortBio:
          <input type="text" name="shortBio" value={formData.shortBio} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SubmitPainting;
