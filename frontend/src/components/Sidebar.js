import React from "react";
import Button from "@mui/material/Button";
import Styles from "../Styles.module.css";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className={Styles.right_container}>
      <h1>Alumini Management System</h1>
      <div className={Styles.Button}>
        <Link className={Styles.Link} to="/Admin">
          Admin
        </Link>
        <Link className={Styles.Link} to="/Staff">
          Staff
        </Link>
        <Link className={Styles.Link} to="/Alumini">
          Alumini
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
