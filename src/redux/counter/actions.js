import { INCREMENT, DECREMENT, CHANGE_STEP } from "./counterTypes";

const increment = (value) => {
  return {
    type: INCREMENT,
    payload: { value },
  };
};

const decrement = (value) => {
  return {
    type: DECREMENT,
    payload: { value },
  };
};


const change_value = (value) => {
  return {
    type: CHANGE_STEP,
    payload: { value },
  };
};

export default {increment, decrement, change_value};