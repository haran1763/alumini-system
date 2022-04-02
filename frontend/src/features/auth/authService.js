import axios from "axios";
import { useParams } from "react-router-dom";

const Register = async (userData) => {
  const response = await axios.post(`/register/Admin`, userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const authService = {
  Register,
};

export default authService;
