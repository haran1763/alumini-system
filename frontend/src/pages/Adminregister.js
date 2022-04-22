import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Styles from "../Styles.module.css";
import Button from "@mui/material/Button";
import { toast } from "react-toastify";
import { auth } from "../features/register";
import { useStateValue } from "../app/Stateprovider";

function AdminRegister() {
  const [{}, dispatch] = useStateValue();

  const [RegisterData, setRegisterData] = useState({
    emailR: "",
    department: "",
    batch: "",
    password: "",
    email: "",
    designation: "",
    passwordR: "",
  });

  const { emailR, department, password, email, passwordR, designation } =
    RegisterData;

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
    auth.register(userData, "Admin", dispatch);
  };

  const Submit = (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };
    auth.login(userData, "Admin", dispatch);
  };

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
            type="password"
            id="password"
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
