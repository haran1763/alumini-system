import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { register, reset } from "../features/auth/authSlice";
import Styles from "../Styles.module.css";
import Button from "@mui/material/Button";
import { toast } from "react-toastify";

function AdminRegister() {
  const [RegisterData, setRegisterData] = useState({
    emailR: "",
    department: "",
    batch: "",
    password: "",
    email: "",
    designation: "",
    passwordR: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const { emailR, department, password, email, passwordR, designation } =
    RegisterData;

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    dispatch(reset);
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setRegisterData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const SubmitR = async (e) => {
    e.preventDefault();
    const userData = {
      emailR,
      passwordR,
      department,
      designation,
    };
    dispatch(register(userData, "Admin"));
  };

  const Submit = () => {};

  return (
    <>
      <div className={Styles.Login}>
        <h1>Register</h1>
        <form onSubmit={SubmitR} className={Styles.form}>
          <span>Email:</span>
          <input
            type="text"
            id="EmailR"
            name="emailR"
            value={emailR}
            onChange={onChange}
            placeholder="Enter your Email"
          />
          <span>Designation:</span>
          <input
            type="text"
            id="designation"
            name="designation"
            value={designation}
            onChange={onChange}
            placeholder="Enter your designation"
          />
          <span>Department:</span>
          <input
            type="text"
            id="Department"
            name="department"
            value={department}
            onChange={onChange}
            placeholder="Enter your department"
          />
          <span>Password:</span>
          <input
            type="password"
            id="passwordR"
            name="passwordR"
            value={passwordR}
            onChange={onChange}
            placeholder="Enter your password"
          />
          <Button type="submit" variant="contained" onSubmit={SubmitR}>
            Register
          </Button>
        </form>
      </div>
      <div className={Styles.Login}>
        <h1>Login</h1>
        <form onSubmit={Submit} className={Styles.form}>
          <span>Email:</span>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={onChange}
            placeholder="Enter your Email"
          />
          <span>Password:</span>
          <input
            type="text"
            id="passeord"
            name="password"
            value={password}
            onChange={onChange}
            placeholder="Enter your password"
          />
          <Button type="submit" variant="contained" onSubmit={Submit}>
            Login
          </Button>
        </form>
      </div>
    </>
  );
}

export default AdminRegister;
