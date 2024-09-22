// PropertyDetailsPopup.js
import React from 'react';
import './PropertyDetailsPopup.css'; // Make sure to add styles for the popup.

const PropertyDetailsPopup = ({ isOpen, onClose, property, propertyId}) => {
  if (!isOpen || !property) return null;

  return (
    <div className="popupOverlay">
      <div className="popupContent">
        <h2>Property Details</h2>
        <h3>{property.name}</h3>
        <p>Location: {property.location}</p>
        <p>Price: ₦{property.price}</p>
        <p>Property Type: {property.propertyType}</p>
        <p>Bedrooms: {property.bedrooms}</p>
        <p>Bathrooms: {property.bathrooms}</p>
        <p>Amenities: {property.amenities}</p>
        <p>Available: {property.isAvailable ? "Yes" : "No"}</p>
        <p>Description: {property.description}</p>
        <p>Property ID: {propertyId}</p>
        <div className="PropClose">
        <button onClick={onClose} >Close</button>
        </div>
       
      </div>
    </div>
  );
};

export default PropertyDetailsPopup;
