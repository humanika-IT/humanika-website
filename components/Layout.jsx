import React from "react";
import { poppins } from "./FontSrc";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className={`${poppins.variable} font-poppins`}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
// className = "pt-20 sm:pt-28 lg:pt-32 px-4 sm:px-8 lg:px-20";
