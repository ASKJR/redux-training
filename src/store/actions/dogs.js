import { LOAD_DOGS } from "../actionTypes";
import axios from "axios";

const setDogs = (dog) => {
  return {
    type: LOAD_DOGS,
    dog,
  };
};

export const fetchDogs = () => {
  return (dispatch) => {
    axios.get("https://dog.ceo/api/breeds/image/random").then(({ data }) => {
      const dog = data.message;
      dispatch(setDogs(dog));
    });
  };
};
