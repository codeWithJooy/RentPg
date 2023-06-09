import React from "react";
import "./Floors.css";
import Header from "../../../Components/Header/Header";
import Footer from "../../../Components/Footer/Footer";
const Floors = () => {
  return (
    <div className="floorDiv">
      <Header />
      <div className="floorUnit">
        <div className="floorUnitTop">
          <div className="floor">Ground Floor</div>
          <div className="floorDelete">
            <img src="Assets/Footer/plus.png" />
            <p>Delete</p>
          </div>
        </div>
        <button className="floorUnitButton"></button>
      </div>
      <Footer />
    </div>
  );
};

export default Floors;
