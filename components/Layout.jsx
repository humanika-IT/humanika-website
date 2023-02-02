import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { poppins, montserrat } from "./FontSrc";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const router = useRouter();

  return (
    <>
      {router.asPath !== "/" && <Navbar />}
      {/* <Navbar /> */}
      <AnimatePresence mode="wait">
        <motion.main
          initial={{ zIndex: 100 }}
          animate={{ zIndex: 100 }}
          exit={{ zIndex: 100 }}
          transition={{
            type: "spring",
            duration: 0.8,
          }}
          layout
          key={`main-${router.asPath}`}
          className={`${montserrat.variable} font-montserrat min-h-[84vh] !z-50`}
        >
          {/* <main className={`${montserrat.variable} font-montserrat min-h-[84vh]`}> */}
          {children}
          {/* </main> */}
        </motion.main>
      </AnimatePresence>
      {/* <Footer /> */}
      {router.asPath !== "/" && <Footer />}
    </>
  );
};

export default Layout;
