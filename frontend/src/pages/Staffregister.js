import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Styles from "../Styles.module.css";

function StaffRegister() {
  const [RegisterData, setRegisterData] = useState({
    name: "",
    department: "",
    batch: "",
    password: "",
    email: "",
    passwordR: "",
  });
  const { name, department, batch, password, email, passwordR } = RegisterData;

  const navigate = useNavigate();
  const onChange = (e) => {
    setRegisterData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const Submit = async (e) => {};

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
          <span>Batch:</span>
          <input
            type="text"
            id="batch"
            name="batch"
            value={batch}
            onChange={onChange}
            placeholder="Enter your batch"
          />
          <span>Department:</span>
          <input
            type="text"
            id="Department"
            name="Department"
            value={department}
            onChange={onChange}
            placeholder="Enter your department"
          />
          <span>Password:</span>
          <input
            type="text"
            id="password"
            name="passwprd"
            value={password}
            onChange={onChange}
            placeholder="Enter your password"
          />
        </form>
      </div>
      <div className={Styles.Login}>
        <h1>Login</h1>
        <form onclick={Submit} className={Styles.form}>
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
            id="passeordR"
            name="passwordR"
            value={passwordR}
            onChange={onChange}
            placeholder="Enter your password"
          />
        </form>
      </div>
    </>
  );
}

export default StaffRegister;
