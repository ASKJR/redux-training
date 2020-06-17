import * as actionTypes from "../actionTypes";
const initialState = {
  fetchOnMount: true,
  users: [],
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_USERS:
      return {
        ...state,
        fetchOnMount: false,
        users: [...state.users, ...action.users],
      };
    case actionTypes.REMOVE_USER:
      return {
        ...state,
        users: state.users.filter(({ login }) => login.uuid !== action.uuid),
      };
    default:
      return state;
  }
};

export default users;
