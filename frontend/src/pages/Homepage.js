import React from "react";
import Styles from "../Styles.module.css";

function Homepage() {
  return (
    <div className={Styles.homepage}>
      <h1>Welcome to American College</h1>
      <h3>
        I think success of any School can be measured by the contribution the
        alumini make to our national life.
        <span>-John F. Kennadi</span>
      </h3>
    </div>
  );
}

export default Homepage;
