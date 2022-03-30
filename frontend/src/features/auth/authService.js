import axios from "axios";
import { useParams } from "react-router-dom";

const Register = async (userData) => {
  const { id } = useParams();
  console.log(id);
  const response = await axios.post(`/register/${id}`, userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const authService = {
  Register,
};

export default authService;
