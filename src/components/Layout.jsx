import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/Layout.css";

const Layout = ({ children }) => {
  return (
    <>
      <div className="wrapper">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
