import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
// import { useRouter } from "next/router";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import { IoIosMail } from "react-icons/io";
import layout from "../styles/Layout.module.css";
import { montserrat, poppins } from "./FontSrc";

const Footer = () => {
  // const router = useRouter();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        type: "spring",
        duration: 1,
      }}
      layout
      className={`${montserrat.variable} font-montserrat ${layout.footer_container}`}
      key="footer"
    >
      <span className={layout.footer_copyright}>
        copyright &#169; 2023 - Humanika Creative Design
      </span>
      <div className={layout.footer_contact}>
        <span className={layout.footer_connect}>CONNECT WITH US</span>
        <div className={layout.footer_medsoc_list}>
          <a
            className={layout.footer_medsoc_item}
            href="mailto:humanika39a@yahoo.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoIosMail className={layout.footer_medsoc_icon} />
          </a>
          <a
            className={layout.footer_medsoc_item}
            href="https://www.instagram.com/artspacehumanika/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className={layout.footer_medsoc_icon} />
          </a>
          <a
            className={layout.footer_medsoc_item}
            href="https://www.facebook.com/humanika.artspace"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* <FaFacebookF className="text-[24px] sm:text-base text-zinc-500" /> */}
            <FaFacebookF className={layout.footer_medsoc_icon} />
          </a>
          <a
            className={layout.footer_medsoc_item}
            href="https://www.youtube.com/@humanikaartspaceofficial"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className={layout.footer_medsoc_icon} />
          </a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
