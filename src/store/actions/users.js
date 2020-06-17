import { LOAD_USERS, REMOVE_USER } from "../actionTypes";
import { instanceUsers as axios } from "../../axios";

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
        const users = data.results.map((user) => {
          const fullName = `${user.name.first} ${user.name.last}`;
          return { ...user, fullName };
        });
        dispatch(setUsers(users));
      })
      .catch((err) => console.log(err));
  };
};

export const removeUser = (uuid) => {
  return {
    type: REMOVE_USER,
    uuid,
  };
};
