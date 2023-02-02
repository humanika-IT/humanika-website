import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiPhoneCall, FiInstagram, FiMail, FiYoutube } from "react-icons/fi";
import general from "../styles/General.module.css";
import typography from "../styles/Typography.module.css";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.2,
    },
    duration: 1,
  },
};

const child = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const title_animation = {
  hidden: { y: 10, opacity: 0 },
  visible: {
    y: 0,
    opacity: 2,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const ContactPage = () => {
  return (
    <div className={general.container}>
      {/* <Image
        src="/images/bg_contact.webp"
        fill
        alt="Contact background"
        className="object-cover object-center !z-0"
      /> */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover object-center !z-0"
      >
        <source src="/images/bg_contact.mp4" type="video/mp4" />
      </video>
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className={general.contact_container}
      >
        <motion.h1 variants={title_animation} className={typography.page_title}>
          CONTACT.
        </motion.h1>
        <div className={general.contact_backdrop}></div>
        <ContactList />
      </motion.div>
    </div>
  );
};

export default ContactPage;

const ContactList = () => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className={general.contact_list}
      >
        <motion.div variants={child} className={general.contact_item}>
          <span className={general.contact_title}>Our Studio</span>
          <span className={general.contact_content}>
            <span> Perumahan Kavling 75 No. 87</span>
            <span>Jl. Bojong Koneng Atas, Bandung </span>
            <span>West Java - Indonesia</span>
          </span>
        </motion.div>
        <motion.div variants={child} className={general.contact_item}>
          <span className={general.contact_title}>Open Hours</span>
          <span className={general.contact_content}>
            <span>Mon - Fri : 09.00 - 17.00</span>
          </span>
        </motion.div>
        <motion.div variants={child} className={general.contact_item}>
          <span className={general.contact_title}>Contacts</span>
          <span className={general.contact_content}>
            <span>+6281-8888-333</span>
            <span>(022) 877 883 11</span>
            <span>humanika39a@yahoo.com</span>
          </span>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
