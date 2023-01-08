import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer
      className={`box-border w-full absolute flex flex-row justify-center items-center px-4 sm:px-8 lg:px-20 py-4 left-0 bottom-0 z-50`}
    >
      <Link
        href="/"
        prefetch={false}
        passHref
        onClick={() => setNav(false)}
        className="h-12 lg:h-16 relative hover:opacity-60 transition"
      >
        <Image
          src="/logo/logo_humanika_bw.png"
          width={113}
          height={62}
          alt="Logo Humanika BW"
          className="object-contain object-center h-12 sm:h-14 lg:h-16"
        />
      </Link>
    </footer>
  );
};

export default Footer;
