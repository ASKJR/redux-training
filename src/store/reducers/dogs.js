import { LOAD_DOGS, REMOVE_DOG_OWNER } from "../actionTypes";

const initialState = {
  owners: [],
};

const dogs = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_DOGS:
      return {
        ...state,
        owners: [...state.owners, action.payload],
      };
    case REMOVE_DOG_OWNER:
      return {
        ...state,
        owners: state.owners.filter((owner) => owner.uuid !== action.uuid),
      };
    default:
      return state;
  }
};

export default dogs;
