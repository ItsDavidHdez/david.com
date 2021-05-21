import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/Layout.css";

const Layout = ({ children }) => {
  return (
    <>
      <div className="wrapper">
        <Header />
        {children}
        <Footer />
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
      </div>
    </>
  );
};

export default Layout;
