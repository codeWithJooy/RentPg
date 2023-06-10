import React, { useState } from "react";
import "./Floors.css";

const AddFloor = ({ setFloorDetails }) => {
  const [roomActive, setRoomActive] = useState(false);
  const handleRoomActive = () => {
    setRoomActive(!roomActive);
  };

  return (
    <div className="floorAdd">
      <div className="floorAddUnit">
        <div className="addUnitTop">
          <p>Add Units to Ground Floor</p>
          <img
            src="Assets/Footer/plus.png"
            onClick={() => setFloorDetails(false)}
          />
        </div>
        <div className="addUnitMain">
          <div className="addMainTitle">
            <p>Select Room/Unit types on this floor</p>
          </div>
          <div className="addUnitSelect">
            <div
              className={roomActive ? `addSelectUnitActive` : `addSelectUnit`}
              onClick={handleRoomActive}
            >
              Rooms
            </div>
            <div className="addSelectUnit">RK</div>
            <div className="addSelectUnit">BHK</div>
            <div className="addSelectUnit">Apartment</div>
          </div>
        </div>
        {roomActive && <AddUnit />}
      </div>
    </div>
  );
};

export default AddFloor;

const AddUnit = () => {
  return (
    <div className="addRoom">
      <div class="addRoomQuantity">
        <div className="addQuantityTitle">
          <p>Room</p>
        </div>
        <div className="addQuantityUnit">
          <input type="text" />
          <p>Sigle Sharing</p>
        </div>
        <div className="addQuantityUnit">
          <input type="text" />
          <p>Sigle Sharing</p>
        </div>
        <div className="addQuantityUnit">
          <input type="text" />
          <p>Sigle Sharing</p>
        </div>
      </div>
      <button>Add Unit</button>
    </div>
  );
};
