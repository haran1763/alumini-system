import axios from "axios";
import { actionTypes } from "../app/reducer";

const API_URL = "http://localhost:5000/";
export async function register(userData, value, dispatch) {
  dispatch({
    type: actionTypes.SET_LOADING,
  });

  try {
    const data = await axios.post(API_URL + "register/" + value, userData);

    if (data.data) {
      console.log(data.data);
      dispatch({
        type: actionTypes.SET_USER,
        user: data,
      });
    }
  } catch (err) {
    dispatch({
      type: actionTypes.SET_ERROR,
      message: err.response.data.message,
    });
  }
}

export async function login(userData, value, dispatch) {
  dispatch({
    type: actionTypes.SET_LOADING,
  });
  try {
    const data = await axios.post(API_URL + "login/" + value, userData);
    dispatch({
      type: actionTypes.SET_USER,
      user: data,
    });
  } catch (err) {
    dispatch({
      type: actionTypes.SET_ERROR,
      message: err.response.data.message,
    });
  }
}

export const auth = {
  register,
  login,
};
