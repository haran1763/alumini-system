import React from "react";
import { useParams } from "react-router-dom";
import Admindashboard from "../Dashboard/Admindashboard";
import Aluminidashboard from "../Dashboard/Aluminidashboard";
import Staffdashboard from "../Dashboard/Staffdashboard";

function Dashboard() {
  const { id } = useParams();
  if (id === "Admin") {
    return <Admindashboard />;
  }
  if (id === "Staff") {
    return <Staffdashboard />;
  }
  if (id === "Alumini") {
    return <Aluminidashboard />;
  }
}

export default Dashboard;
