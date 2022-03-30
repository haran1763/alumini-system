import React from "react";
import Styles from "./Styles.module.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import RegisterPage from "./pages/RegisterPage";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <div className={Styles.App}>
      <div className={Styles.container}>
        <Router>
          <Sidebar />
          <div className={Styles.left_container}>
            <Routes>
              <Route path="/Register/:id" element={<RegisterPage />} />
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
