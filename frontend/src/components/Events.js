import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useStateValue } from "../app/Stateprovider";
import com from "../components.module.css";
import { details } from "../features/details";
import Button from "@mui/material/Button";
import Eventsform from "../pages/Eventsform";

function Events() {
  const [form, setForm] = useState(false);
  const [{ user }, dispatch] = useStateValue();
  const [events, setEvent] = useState([]);
  const navigate = useNavigate();
  useEffect(async () => {
    const resp = await details.getEvent(user.data.token, "Events", dispatch);
    setEvent(resp);
  }, []);

  return !form ? (
    <div className={com.Event}>
      <div className={com.header}>
        <h1>Events</h1>
        <Button
          variant="contained"
          onClick={() => {
            navigate("/Admin/form");
          }}
        >
          Add Event
        </Button>
      </div>
      {events.map(() => {
        return (
          <div>
            <h1>{events.Event}</h1>
          </div>
        );
      })}
    </div>
  ) : (
    <div>
      <Eventsform />
    </div>
  );
}

export default Events;
