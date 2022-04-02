import React from "react";
import Styles from "./Styles.module.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Homepage from "./pages/Homepage";
import AdminRegister from "./pages/Adminregister";
import AluminiRegister from "./pages/Aluminiregister";
import StaffRegister from "./pages/Staffregister";

function App() {
  return (
    <div className={Styles.App}>
      <div className={Styles.container}>
        <Router>
          <Sidebar />
          <div className={Styles.left_container}>
            <Routes>
              <Route path="/Admin" element={<AdminRegister />} />
              <Route path="/Alumini" element={<AluminiRegister />} />
              <Route path="/Staff" element={<StaffRegister />} />
              <Route path="/" element={<Homepage />} />
            </Routes>
          </div>
        </Router>
        <ToastContainer />
      </div>
    </div>
  );
}

export default App;
