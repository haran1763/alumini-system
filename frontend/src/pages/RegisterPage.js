import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { register, reset } from "../features/auth/authSlice";
import { toast } from "react-toastify";
import Styles from "../Styles.module.css";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const [RegisterData, setRegisterData] = useState({
    name: "",
    department: "",
    batch: "",
    password: "",
  });

  const { name, email, department, batch, password, passwordR } = RegisterData;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
  }, [isError]);

  const onChange = (e) => {
    setRegisterData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const Submit = (e) => {
    e.preventDefault();
    const userData = {
      name,
      email,
      password,
    };
    dispatch(register(userData));
  };

  return (
    <>
      <div className={Styles.Login}>
        <h1>Register</h1>
        <form onSubmit={Submit} className={Styles.form}>
          <span>Name:</span>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={onChange}
            placeholder="Enter your Name"
          />
          {/* <span>EmailId:</span>
          <input
            type="text"
            id="Emailid"
            name="Emailid"
            value={emailidR}
            onChange={onChange}
            placeholder="Enter your EmailId"
          /> */}
          <span>Department:</span>
          <input
            type="text"
            id="department"
            name="department"
            value={department}
            onChange={onChange}
            placeholder="Enter your Department"
          />
          <span>Batch:</span>
          <input
            type="text"
            id="batch"
            name="batch"
            value={batch}
            onChange={onChange}
            placeholder="Enter your Batch details"
          />
          <span>Password:</span>
          <input
            type="password"
            id="PasswordR"
            name="passwordR"
            value={passwordR}
            onChange={onChange}
            placeholder="Enter your Password"
          />
          <Button type="submit" variant="contained" onSubmit={Submit}>
            Register
          </Button>
        </form>
      </div>
      <div className={Styles.Login}>
        <h1>Login</h1>
        <form className={Styles.form}>
          <span>Email ID:</span>
          <input
            type="text"
            id="EmailId"
            name="email"
            value={email}
            onChange={onChange}
            placeholder="Enter your Email ID"
          />
          <span>Password:</span>
          <input
            type="password"
            id="Password"
            name="password"
            value={password}
            onChange={onChange}
            placeholder="Enter your Password"
          />
          <Button type="submit" variant="contained" onSubmit={Submit}>
            Login
          </Button>
        </form>
      </div>
    </>
  );
}

export default RegisterPage;
