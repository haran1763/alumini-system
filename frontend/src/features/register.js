import axios from "axios";
import { actionTypes } from "../app/reducer";

const API_URL = "http://localhost:5000/";
export async function register(userData, value, dispatch) {
  const data = await axios.post(API_URL + "register/" + value, userData);
  dispatch({
    type: actionTypes.SET_USER,
    user: data,
  });
  if (data.email) {
    localStorage.setItem("user", data);
  }
}

export async function login(userData, value, dispatch) {
  const data = await axios.post(API_URL + "login/" + value, userData);
  dispatch({
    type: actionTypes.SET_USER,
    user: data,
  });
}

export const auth = {
  register,
  login,
};
