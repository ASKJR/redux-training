import * as actionTypes from "../../actionTypes";
const initialState = {
  users: [],
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_USERS:
      return {
        ...state,
        users: [...state.users, ...action.users],
      };
    default:
      return state;
  }
};

export default users;
