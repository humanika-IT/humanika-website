import React from "react";
import Link from "next/link";
import Image from "next/image";
// import { useRouter } from "next/router";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import { IoIosMail } from "react-icons/io";
import layout from "../styles/Layout.module.css";
import { poppins } from "./FontSrc";

const Footer = () => {
  // const router = useRouter();

  return (
    <footer
      className={`${poppins.variable} font-poppins ${layout.footer_container}`}
    >
      <span className={layout.footer_copyright}>
        copyright &#169; 2023 - Humanika Creative Design
      </span>
      <div className={layout.footer_contact}>
        <span className={layout.footer_connect}>CONNECT WITH US</span>
        <div className={layout.footer_medsoc_list}>
          <a
            className={layout.footer_medsoc_item}
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoIosMail className={layout.footer_medsoc_icon} />
          </a>
          <a
            className={layout.footer_medsoc_item}
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className={layout.footer_medsoc_icon} />
          </a>
          <a
            className={layout.footer_medsoc_item}
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* <FaFacebookF className="text-[24px] sm:text-base text-zinc-500" /> */}
            <FaFacebookF className={layout.footer_medsoc_icon} />
          </a>
          <a
            className={layout.footer_medsoc_item}
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className={layout.footer_medsoc_icon} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
