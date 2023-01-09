import React from "react";
import Image from "next/image";
import { FiPhoneCall, FiInstagram, FiMail, FiYoutube } from "react-icons/fi";
import general from "../styles/General.module.css";

const ContactPage = () => {
  return (
    <div className={general.container}>
      <div className={general.contact_container}>
        <div className={general.contact_item}>
          <FiPhoneCall className={general.contact_icon} />
          <span className={general.contact_content}>080226303112</span>
        </div>
        <div className={general.contact_item}>
          <FiMail className={general.contact_icon} />
          <span className={general.contact_content}>
            humanikapicture@gmail.com
          </span>
        </div>
        <div className={general.contact_item}>
          <FiInstagram className={general.contact_icon} />
          <span className={general.contact_content}>@artspacehumanika</span>
        </div>
        <div className={general.contact_item}>
          <FiYoutube className={general.contact_icon} />
          <span className={general.contact_content}>humanika artspace</span>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
