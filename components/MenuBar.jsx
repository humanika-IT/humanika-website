import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import layout from "../styles/Layout.module.css";

const menu_content = [
  { title: "About Us", url: "/about-us" },
  { title: "Design", url: "/works/design" },
  { title: "Digital", url: "/works/digital" },
  { title: "Photography", url: "/works/photography" },
  { title: "Videography", url: "/works/videography" },
  { title: "Clients", url: "/clients" },
  { title: "Contact", url: "/contact" },
];

const MenuBar = ({ toggleNav, isOpen }) => {
  const router = useRouter();

  return (
    <ul className={isOpen ? layout.menubar_open : layout.menubar_close}>
      {menu_content.map((item, index) => {
        return (
          <li key={`menu-${item.url}`}>
            <Link
              href={item.url}
              prefetch={false}
              passHref
              className={
                router.asPath === item.url ? layout.link_active : layout.link
              }
            >
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MenuBar;
