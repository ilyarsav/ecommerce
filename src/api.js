import axios from "axios";

export const globalApi = axios.create({
  baseURL: "https://limitless-lake-55070.herokuapp.com",
  headers: {
    "Content-Type": "application/json",
  },
});
