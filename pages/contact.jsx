import React from "react";
import Image from "next/image";
import { FiPhoneCall, FiInstagram, FiMail, FiYoutube } from "react-icons/fi";
import general from "../styles/General.module.css";
import typography from "../styles/Typography.module.css";

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
        className="absolute top-0 left-0 w-full h-full object-cover object-center !z-0"
      >
        <source src="/images/bg_contact.mp4" type="video/mp4" />
      </video>
      <div className={general.contact_container}>
        <h1 className={typography.page_title}>CONTACT.</h1>
        <ContactList />
      </div>
    </div>
  );
};

export default ContactPage;

const ContactList = () => {
  return (
    <div className={general.contact_list}>
      <div className={general.contact_item}>
        <span className={general.contact_title}>Our Studio</span>
        <span className={general.contact_content}>
          <span> Perumahan Kavling 75 No. 87</span>
          <span>Jl. Bojong Koneng Atas, Bandung </span>
          <span>West Java - Indonesia</span>
        </span>
      </div>
      <div className={general.contact_item}>
        <span className={general.contact_title}>Open Hours</span>
        <span className={general.contact_content}>
          <span>Mon - Fri : 09.00 - 17.00</span>
        </span>
      </div>
      <div className={general.contact_item}>
        <span className={general.contact_title}>Contacts</span>
        <span className={general.contact_content}>
          <span>+6281-8888-333</span>
          <span>(022) 877 883 11</span>
          <span>humanika39a@yahoo.com</span>
        </span>
      </div>
    </div>
  );
};
