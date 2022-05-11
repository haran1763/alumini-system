import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import axios from "axios";
import com from "../components.module.css";
import { details } from "../features/details";
import { useStateValue } from "../app/Stateprovider";

function Recents() {
  const [{ user }, dispatch] = useStateValue();
  const [responses, setResponse] = useState([]);
  useEffect(async () => {
    const resp = await details.getDetails(user.data.token, "Admin", dispatch);
    setResponse(resp);
  }, []);

  return (
    <div className={com.Recents}>
      <h1>Recents</h1>
      {responses.map((response) => {
        return (
          <div className={com.content}>
            <strong>{response.collegeID}</strong>
            <div className={com.paragraph}>
              <p>
                {response.department} <br />
                {response.passedOut}
              </p>
              <Button variant="contained">Admit</Button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Recents;
