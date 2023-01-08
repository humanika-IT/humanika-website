import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import MenuBtn from "./MenuBtn";
import MenuBar from "./MenuBar";
import layout from "../styles/Layout.module.css";

const Navbar = () => {
  // ============ HIDE MENU AT LOGO CLICK =============
  const [isOpen, setNav] = useState(false);
  const toggleNav = () => {
    setNav(!isOpen);
  };
  // ==================================================

  // =============== NAVBAR HIDDEN ===============
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > 40) {
          setShow(false);
        } else {
          setShow(true);
        }

        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);
  // ==================================================

  return (
    <header className={show ? layout.header : layout.header_scroll}>
      <Link
        href="/"
        prefetch={false}
        passHref
        onClick={() => setNav(false)}
        className={layout.logo_container}
      >
        <Image
          src="/logo/logo_humanika.png"
          width={56}
          height={90}
          alt="Logo Humanika"
          className={layout.logo_image}
        />
      </Link>
      <div
        className={
          isOpen ? layout.menubar_container : layout.menubar_container_close
        }
      >
        <MenuBar toggleNav={toggleNav} isOpen={isOpen} />
      </div>
      <MenuBtn toggleNav={toggleNav} isOpen={isOpen} />
    </header>
  );
};

export default Navbar;
