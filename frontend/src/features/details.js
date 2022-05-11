import axios from "axios";
import { actionTypes } from "../app/reducer";

const API_URL = "http://localhost:5000/";

export const getDetails = async (token, value, dispatch) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  dispatch({
    type: actionTypes.SET_LOADING,
  });
  try {
    const response = await axios.get(API_URL + "details/" + value, config);

    return response.data;
  } catch (error) {
    dispatch({
      type: actionTypes.SET_ERROR,
      message: error.response.data.message,
    });
  }
};

export const details = {
  getDetails,
  //getEvents,
};
