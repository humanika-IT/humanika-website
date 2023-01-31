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
      <div className="absolute top-0 w-screen h-screen bg-zinc-800 !z-50">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full object-cover object-center "
        >
          <source src="/images/bg_homepage.mp4" type="video/mp4" />
        </video>
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
      <motion.div
        // whileHover={{ x: [0, 0] }}
        animate={{ x: [0, -8, 0] }}
        transition={{
          ease: "easeInOut",

          duration: 2,
          repeat: Infinity,
        }}
        className="absolute right-4 sm:right-10 bottom-6 sm:bottom-10 z-[100]"
      >
        <Link
          href="/about-us"
          prefetch={false}
          passHref
          className={`relative hover:opacity-60 transition`}
        >
          <Image
            src="/images/home_btn.png"
            width={149}
            height={109}
            alt="Logo Humanika"
            className={`object-contain object-center h-8 w-16 lg:h-12 lg:w-20`}
          />
        </Link>
      </motion.div>
    </>
  );
};

export default HomePage;
