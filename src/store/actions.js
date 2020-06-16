import { LOAD_USERS } from "./actionTypes";
import axios from "../axios";

const setUsers = (users) => {
  return {
    type: LOAD_USERS,
    users,
  };
};
export const fetchUsers = (qty = 2) => {
  return (dispatch) => {
    axios
      .get(`/?results=${qty}&nat=br`)
      .then(({ data }) => {
        const users = data.results;
        console.log(users);
        dispatch(setUsers(users));
      })
      .catch((err) => console.log(err));
  };
};
