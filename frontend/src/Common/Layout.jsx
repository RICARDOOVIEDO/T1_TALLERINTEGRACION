import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar.jsx";
import Footer from "../Components/Footer/Footer.jsx";
import "./layout.css";

function Layout() {
  return (
    <>
      <div className="page-container">
        <Navbar />
        <div className="content-container">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Layout;