import React, { useState } from "react";
import Button from "@mui/material/Button";
import com from "../components.module.css";
import Styles from "../Styles.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Eventsform() {
  const [Eventdata, setEvent] = useState({
    event: "",
    date: "",
    place: "",
    description: "",
    guest: "",
  });
  const { event, date, place, description, guest } = Eventdata;
  const navigate = useNavigate();

  const Submit = async (e) => {
    e.preventDefault();
    const userData = {
      event,
      date,
      place,
      description,
      guest,
    };

    await axios.post("http://localhost:5000/details/Event", userData);
    navigate("/Admin");
  };

  const onChange = (e) => {
    setEvent((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className={com.right}>
      <form onSubmit={Submit} className={Styles.form}>
        <span>Event Name:</span>
        <input
          type="text"
          id="event"
          name="event"
          value={event}
          onChange={onChange}
          placeholder="Enter your Email"
        />
        <span>Date:</span>
        <input
          type="text"
          id="date"
          name="date"
          value={date}
          onChange={onChange}
          placeholder="Enter your designation"
        />
        <span>place:</span>
        <input
          type="text"
          id="place"
          name="place"
          value={place}
          onChange={onChange}
          placeholder="Enter your department"
        />
        <span>Guest:</span>
        <input
          type="text"
          id="Guest"
          name="guest"
          value={guest}
          onChange={onChange}
          placeholder="Enter your Guest"
        />
        <span>Description:</span>
        <input
          type="text"
          id="description"
          name="description"
          value={description}
          onChange={onChange}
          placeholder="Enter your description"
        />
        <Button type="submit" variant="contained" onSubmit={Submit}>
          Register
        </Button>
      </form>
    </div>
  );
}

export default Eventsform;
