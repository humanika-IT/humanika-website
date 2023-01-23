import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import MenuBtn from "./MenuBtn";
import MenuBar from "./MenuBar";
import layout from "../styles/Layout.module.css";
import { poppins } from "./FontSrc";

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
    // <header className={show ? layout.header : layout.header_scroll}>
    <header className={`${poppins.variable} font-poppins ${layout.header}`}>
      <Link
        href="/"
        prefetch={false}
        passHref
        onClick={() => setNav(false)}
        className={layout.logo_container}
      >
        <Image
          src="/logo/logo_humanika_new.png"
          width={510}
          height={160}
          alt="Logo Humanika"
          className={layout.logo_image}
        />
      </Link>
      <nav className="block lg:hidden">
        <div
          className={
            isOpen ? layout.menubar_container : layout.menubar_container_close
          }
        >
          <MenuBar toggleNav={toggleNav} isOpen={isOpen} />
        </div>
        <MenuBtn toggleNav={toggleNav} isOpen={isOpen} />
      </nav>
      <nav className="hidden lg:block">
        <MenuBar toggleNav={toggleNav} isOpen={true} />
      </nav>
    </header>
  );
};

export default Navbar;
