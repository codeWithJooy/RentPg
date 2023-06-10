import React, { useState } from "react";
import "./Floors.css";
import Header from "../../../Components/Header/Header";
import Footer from "../../../Components/Footer/Footer";
import FloorUnit from "./FloorUnit";

const Floors = () => {
  const [floorDetails, setFloorDetails] = useState(false);
  return (
    <div className="floorDiv">
      <Header />
      <FloorUnit setFloorDetails={setFloorDetails} />
      <div className="floorAdd">
        <div className="floorAddUnit"></div>
      </div>
      <Footer />
    </div>
  );
};

export default Floors;
