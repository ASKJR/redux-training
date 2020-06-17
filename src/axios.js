import axios from "axios";

export const instanceUsers = axios.create({
  baseURL: "https://randomuser.me/api",
});

export const instanceDogs = axios.create({
  baseURL: "https://dog.ceo/api",
});
