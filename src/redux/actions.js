import axios from "axios";
import { getAllUsers } from "./slice";
require("dotenv").config();
const URL = process.env.URL;

export const getUsersAll = () => {
  return async function (dispatch) {
    try {
      const data = await axios.post(`${URL}/users`).data;
      return dispatch(getAllUsers(data));
    } catch (error) {}
  };
};
