import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
// className = "pt-20 sm:pt-28 lg:pt-32 px-4 sm:px-8 lg:px-20";
