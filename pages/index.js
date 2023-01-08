import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import general from "../styles/General.module.css";

export default function Home() {
  return (
    <div className={general.container}>
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover !z-0"
      >
        <source src="/images/background_video.mp4" type="video/mp4" />
      </video>
      {/* <Image
        src="/images/bg-test.png"
        // width={56}
        // height={90}
        alt="Logo Humanika"
        fill
        className="object-cover object-center !z-0"
      /> */}
      {/* <h1 className="!z-10 text-[#abcdef]">HELLOooooooooooooooo</h1> */}
    </div>
  );
}
