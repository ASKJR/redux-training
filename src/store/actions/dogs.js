import { LOAD_DOGS, REMOVE_DOG_OWNER } from "../actionTypes";
import { instanceDogs as axios } from "../../axios";

const setDogs = (payload) => {
  return {
    type: LOAD_DOGS,
    payload,
  };
};

export const fetchDogs = (uuid, qty = 3) => {
  return (dispatch) => {
    axios
      .get(`/breeds/image/random/${qty}`)
      .then(({ data }) => {
        const payload = { uuid, photos: data.message };
        dispatch(setDogs(payload));
      })
      .catch((err) => console.log(err));
  };
};

export const removeOwner = (uuid) => {
  return {
    type: REMOVE_DOG_OWNER,
    uuid,
  };
};
