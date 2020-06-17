import { LOAD_DOGS } from "../actionTypes";

const initialState = {
  dog: "",
};

const dogs = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_DOGS:
      return {
        ...state,
        dog: action.dog,
      };
    default:
      return state;
  }
};

export default dogs;
