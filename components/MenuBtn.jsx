import React from "react";
import { IoCloseSharp, IoMenuSharp } from "react-icons/io5";
import layout from "../styles/Layout.module.css";

const MenuBtn = ({ toggleNav, isOpen }) => {
  return (
    <button className={layout.menubtn_container} onClick={toggleNav}>
      {isOpen ? <IoCloseSharp /> : <IoMenuSharp />}
    </button>
  );
};

export default MenuBtn;
