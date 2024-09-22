import React from 'react'
import './Address.css'


const Address = ({ isOpen, onClose, onSubmit }) => {
    if (!isOpen) return null;

    const handleSubmit = () => {
      onSubmit();
      onClose();
    };
//     <div className="email">
//     <p>Property</p>
//     <select
//         name="property"
//         value={formData.property}
//         onChange={handleInputChange}
//     >
//         <option value="">Select Property</option>
//         {properties.map(property => (
//             <option key={property._id} value={property._id}>
//                 {property.name}
//             </option>
//         ))}
//     </select>
// </div>
  
  return (
    <div className="mod">
        <div className="mod-content">
            <span className="close-btn" onClick={onClose}>&times;</span> 
            <h4>ADD YOUR ADDRESS</h4>
            <div className="props">
                <p>Full Address</p>  
                <input type="text" />
            </div>
            <div className="nam">
            <div className="local">
                <p>Country</p>
                <p>State</p>
            </div>
            <div className="inter">
                <input type="text" />
                <input type="text" />
            </div>
          </div>
          <div className="props">
                <p>Landmark</p>  
                <input type="text" />
         </div>
         <button className="me" onClick={()=>handleSubmit()}>Submit</button>

        </div>
  </div>
  )
}

export default Address
