import axios from "axios";
import { useParams } from "react-router-dom";
const API_URL = "http://localhost:5000";

const register = async (userData, value) => {
  const response = await axios.post(API_URL + `/register/${value}`, userData);

  return response.data;
};

const authService = {
  register,
};

export default authService;
