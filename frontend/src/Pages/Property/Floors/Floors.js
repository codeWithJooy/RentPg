import React, { useState } from "react";
import "./Floors.css";
import Header from "../../../Components/Header/Header";
import Footer from "../../../Components/Footer/Footer";
import FloorUnit from "./FloorUnit";
import AddFloor from "./AddFloor";
const Floors = () => {
  const [floorDetails, setFloorDetails] = useState(false);
  let arr = [];
  for (let i = 0; i <= 3; i++) {
    if (i == 0) {
      arr.push("Ground Floor");
    } else {
      arr.push("Floor " + i);
    }
  }
  return (
    <div className="floorDiv">
      <Header />
      {arr.map((data, key) => (
        <FloorUnit
          floorName={data}
          key={key}
          setFloorDetails={setFloorDetails}
        />
      ))}
      {floorDetails && <AddFloor setFloorDetails={setFloorDetails} />}
      <Footer />
    </div>
  );
};

export default Floors;
