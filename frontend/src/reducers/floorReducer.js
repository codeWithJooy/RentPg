import { FLOORS_ADDED } from "../actionTypes/floorActionsType";

const initial = {};

const floorReducer = (state = initial, action) => {
  switch (action.type) {
    case FLOORS_ADDED:
      return {
        ...state,
        floors: action.payload,
      };
  }
};

export default floorReducer;
