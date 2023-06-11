import React, { useState } from "react";
import "./Property.css";
import { useDispatch } from "react-redux";
import { setTotalFloors } from "../../actions/floorActions";

const PropertyInit = () => {
  const [floors, setFloors] = useState(0);
  const dispatch = useDispatch();
  const handleFloors = () => {
    dispatch(setTotalFloors(floors));
  };
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
            <input type="text" onChange={(e) => setFloors(e.target.value)} />
            <img src="Assets/Footer/plus.png" onClick={handleFloors} />
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
