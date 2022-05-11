import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Styles from "../Styles.module.css";
import Button from "@mui/material/Button";
import { auth } from "../features/register";
import { useStateValue } from "../app/Stateprovider";
import Spinner from "../components/Spinner";

function AluminiRegister() {
  const [{ user }, dispatch] = useStateValue();
  const [isLoading, setLoading] = useState(false);

  const [RegisterData, setRegisterData] = useState({
    collegeID: "",
    department: "",
    password: "",
    email: "",
    emailR: "",
    passedOut: "",
    passwordR: "",
  });
  const {
    collegeID,
    department,
    password,
    email,
    emailR,
    passedOut,
    passwordR,
  } = RegisterData;

  const navigate = useNavigate();
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
      collegeID,
      department,
      passwordR,
    };
    setLoading(true);
    auth.register(userData, "Alumini", dispatch);
  };
  const Submit = async (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };
    setLoading(true);
    auth.login(userData, "Alumini", dispatch);
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <div className={Styles.Login}>
        <h1>Register</h1>
        <form onSubmit={SubmitR} className={Styles.form}>
          <span>Email:</span>
          <input
            type="text"
            id="emailR"
            name="emailR"
            value={emailR}
            onChange={onChange}
            placeholder="Enter your email"
          />
          <span>College ID:</span>
          <input
            type="text"
            id="collegeID"
            name="collegeID"
            value={collegeID}
            onChange={onChange}
            placeholder="Enter your CollegeID"
          />
          <span>Department:</span>
          <input
            type="text"
            id="department"
            name="department"
            value={department}
            onChange={onChange}
            placeholder="Enter your department"
          />
          <span>Passed Out:</span>
          <input
            type="text"
            id="passedOut"
            name="passedOut"
            value={passedOut}
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
            type="email"
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

export default AluminiRegister;
