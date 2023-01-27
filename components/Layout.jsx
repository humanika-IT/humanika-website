import React from "react";
import { poppins, montserrat } from "./FontSrc";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className={`${montserrat.variable} font-montserrat`}>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
