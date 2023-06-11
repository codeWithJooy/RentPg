import { FLOORS_ADDED } from "../actionTypes/floorActionsType";

export const setTotalFloors = (data) => {
  return {
    type: FLOORS_ADDED,
    payload: data,
  };
};
