import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import general from "../styles/General.module.css";
import {
  HiOutlineArrowRight,
  HiChevronDoubleRight,
  HiChevronRight,
  HiArrowNarrowRight,
} from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa";
// import HomeBtn from "./images/home-btn.svg";

const HomePage = () => {
  return (
    // <div className={general.container}>
    //   <video
    //     autoPlay
    //     loop
    //     muted
    //     className="absolute w-full h-full object-cover object-center !z-0"
    //   >
    //     <source src="/images/bg-homepage.mp4" type="video/mp4" />
    //   </video>
    //   {/* absolute top-0 left-0 */}
    //   {/* <Image
    //     src="/images/bg-test.png"
    //     // width={56}
    //     // height={90}
    //     alt="Logo Humanika"
    //     fill
    //     className="object-cover object-center !z-0"
    //   /> */}
    //   {/* <h1 className="!z-10 text-[#abcdef]">HELLOooooooooooooooo</h1> */}
    // </div>
    <>
      <div className="absolute top-0 w-screen h-screen bg-zinc-300 !z-50">
        <motion.video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover object-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
          }}
        >
          <source src="/images/bg_homepage.mp4" type="video/mp4" />
        </motion.video>
        <div
          // whileHover={{ x: [0, 0] }}
          // animate={{ x: [-8, 8, -8] }}
          // transition={{
          //   ease: "easeInOut",
          //   duration: 2,
          //   repeat: Infinity,
          // }}
          className="absolute right-4 sm:right-10 bottom-6 sm:bottom-10 group !z-[100]"
        >
          {/* <span className="hidden group-hover:inline-block transition-all">
          Welcome to Humanika!
        </span> */}
          <Link
            href="/about-us"
            prefetch={false}
            passHref
            // className={`relative transition`}
          >
            <motion.span className="block group-hover:bg-secondaryPink p-4 lg:py-6 lg:px-8 rounded-full">
              {/* <Image
              src="/images/home_btn.png"
              width={149}
              height={109}
              alt="Logo Humanika"
              className={`object-contain object-center h-8 w-16 lg:h-12 lg:w-20`}
            /> */}
              <HomeBtn
                className={`h-8 w-16 lg:h-12 lg:w-20 fill-secondaryPink group-hover:fill-white`}
              />
            </motion.span>
          </Link>
        </div>
      </div>
      {/* <motion.div
        // whileHover={{ x: [0, 0] }}
        animate={{ x: [0, -8, 0] }}
        transition={{
          ease: "easeInOut",

          duration: 2,
          repeat: Infinity,
        }}
        className="absolute right-4 sm:right-10 bottom-20 sm:bottom-10 max-w-[200px] sm:max-w-[400px] z-[100]"
      >
        <Link href="/about-us" prefetch={false} scroll={true} passHref>
          <span className="flex flex-row justify-center items-center text-white text-base sm:text-xl font-semibold tracking-tight hover:border-secondaryPink hover:bg-white bg-white/40 sm:bg-transparent px-8 py-2 hover:text-secondaryPink transition-all rounded-full">
            <span className="mr-4 text-right sm:border-b-2 border-white">
              Welcome to Humanika{" "}
            </span>{" "}
            <motion.span
              animate={{ x: [0, 16, 0] }}
              transition={{
                ease: "easeInOut",

                duration: 2,
                repeat: Infinity,
              }}
              className="flex flex-row"
            >
              <HiChevronRight />
              <HiChevronRight />
              <HiChevronRight />
            </motion.span>
          </span>
        </Link>
      </motion.div> */}
    </>
  );
};

export default HomePage;

const HomeBtn = ({ ...props }) => {
  return (
    <motion.svg
      width="75"
      height="55"
      viewBox="0 0 75 55"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
      animate={{ x: [-8, 20, -8] }}
      transition={{
        ease: "easeInOut",
        duration: 2,
        repeat: Infinity,
      }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.13202 1.21168C2.67197 -0.372257 5.20438 -0.407923 6.78832 1.13202L29.0733 22.798C31.4966 25.1541 31.4967 29.0458 29.0734 31.4019L6.78832 53.068C5.20438 54.6079 2.67197 54.5723 1.13202 52.9883C-0.407921 51.4044 -0.372255 48.872 1.21168 47.332L22.0217 27.1L1.21168 6.86798C-0.372255 5.32803 -0.407921 2.79562 1.13202 1.21168ZM22.892 1.21169C24.432 -0.372254 26.9644 -0.407926 28.5483 1.13201L50.8334 22.798C53.2564 25.1541 53.2566 29.0459 50.8334 31.4019L28.5483 53.068C26.9644 54.6079 24.432 54.5723 22.892 52.9883C21.3521 51.4044 21.3877 48.872 22.9717 47.332L43.7818 27.1L22.9717 6.86798C21.3877 5.32804 21.3521 2.79563 22.892 1.21169ZM44.652 1.21169C46.192 -0.372254 48.7244 -0.407926 50.3083 1.13201L72.5934 22.798C75.0169 25.1543 75.0164 29.0459 72.5937 31.4017L50.3083 53.068C48.7244 54.6079 46.192 54.5723 44.652 52.9883C43.1121 51.4044 43.1477 48.872 44.7317 47.332L65.5418 27.1L44.7317 6.86798C43.1477 5.32804 43.1121 2.79563 44.652 1.21169Z"
      />
    </motion.svg>
  );
};
