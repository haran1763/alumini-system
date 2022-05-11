import React from "react";
import Styles from "./Styles.module.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Homepage from "./pages/Homepage";
import AdminRegister from "./pages/Adminregister";
import AluminiRegister from "./pages/Aluminiregister";
import StaffRegister from "./pages/Staffregister";
import Dashboard from "./pages/Dashboard";
import { useStateValue } from "./app/Stateprovider";
import Eventsform from "./pages/Eventsform";

function App() {
  const user = true;
  return (
    <div className={Styles.App}>
      <div className={Styles.container}>
        {!user ? (
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
        ) : (
          <Router>
            <Routes>
              <Route path="/:id" element={<Dashboard />} />
              {/* <Route path="/Admin/form" element={<Eventsform />} /> */}
              {/* <Route path="/" element={<StaffRegister />} /> */}
              {/* <Route path="/" element={<Dashboard />} /> */}
            </Routes>
          </Router>
        )}
        <ToastContainer theme="coloured" />
      </div>
    </div>
  );
}

export default App;
