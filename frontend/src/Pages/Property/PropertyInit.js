import React from "react";
import "./Property.css";

const PropertyInit = () => {
  return (
    <div className="propertyContainer">
      <div className="propertyTitle">
        <p>Add Rooms in your property</p>
      </div>
      <div className="propertyNumber">
        <div className="propertyDetails">
          <div className="detailsTitle">
            <p>How Many floors do you have in AbhiPg ?</p>
          </div>
          <div className="propertyDetailsInput">
            <input type="text" />
            <img src="Assets/Footer/plus.png" />
          </div>
        </div>
        <div className="propertyIcon">
          <img src="Assets/Footer/apartment.png" />
        </div>
      </div>
    </div>
  );
};

export default PropertyInit;
