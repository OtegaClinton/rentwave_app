import React, { useState, useRef } from 'react';
import './AddProperty.css';
import { LuUpload } from "react-icons/lu";
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddProperty = ({ isOpen, onClose, setPropertyId }) => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [amenities, setAmenities] = useState("");
  const [description, setDescription] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null);

  if (!isOpen) return null;

  const chooseFile = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true

    const formData = new FormData();
    formData.append('name', name);
    formData.append('location', location);
    formData.append('price', price);
    formData.append('propertyType', propertyType);
    formData.append('bedrooms', bedrooms);
    formData.append('bathrooms', bathrooms);
    formData.append('amenities', amenities);
    formData.append('description', description);
    if (selectedFile) {
      formData.append('images', selectedFile);
    }

    try {
      const token = localStorage.getItem("userToken");
      const response = await axios.post('https://rentwave.onrender.com/api/v1/properties', formData, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });

    
      const propertyId = response.data.data._id; 
      console.log("Property created with ID:", propertyId);
      setPropertyId(propertyId);
      toast.success(response.data.message || 'Property added successfully!');
      
    
      
      onClose(); 
    } catch (error) {
      console.error("Error creating property:", error);

      if (error.response && error.response.data) {
        const errorMessage = error.response.data.message || 'Failed to create property.';
        toast.error(errorMessage);
      } else {
        alert(errorMessage);
      }
    } finally {
      setLoading(false); 
    }
};


  return (
    <div className="modal">
      <div className="modal-content">
        <div className="ModalHeader">
          <span className="close-btn" onClick={onClose}>&times;</span>
          <h2>Add Property</h2>
          <p>Add or edit your property details</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className='Prosinput'>
            <div className="words">
              <p>Property Name</p>
              <input 
                type="text" 
                className='inputs' 
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <div className="email">
            <label htmlFor="location">Location</label>
            <input 
              type="text" 
              id="location" 
              name="location" 
              required 
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className="email">
            <p>Property Type</p>
            <select value={propertyType} onChange={(e) => setPropertyType(e.target.value)}>
              <option>Select Property</option>
              <option value="Apartment">apartment</option>
              <option value="House">House</option>
              <option value="Condo">condo</option>
              <option value="Townhouse">Townhouse</option>
            </select>
          </div>
          <div className='nameinput'>
            <div className="words">
              <p>Price</p>
              <p>Amenities</p>
            </div>
            <div className="inputs">
              <input 
                type="text" 
                placeholder='₦' 
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
              <input 
                type="text" 
                placeholder='e.g., Pool, Gym' 
                value={amenities}
                onChange={(e) => setAmenities(e.target.value)}
              />
            </div>
          </div>
          <div className='nameinput'>
            <div className="words">
              <p>Bedrooms</p>
              <p>Bathrooms</p>
            </div>
            <div className="inputs">
              <input 
                type="text" 
                value={bedrooms}
                onChange={(e) => setBedrooms(e.target.value)}
              />
              <input 
                type="text" 
                value={bathrooms}
                onChange={(e) => setBathrooms(e.target.value)}
              />
            </div>
          </div>
          <div className="Desc">
            <p>Description</p>
            <input 
              type="text" 
              className='descInput'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className='Buttons'>
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />
            <button className='But' onClick={chooseFile}> 
              <LuUpload className='buticon'/> Upload Image
            </button>
          </div>
          <button className='Button2' type='submit' disabled={loading}>
            {loading ? 'Loading...' : 'Add'} 
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProperty;
