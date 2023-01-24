import React from "react";

const Preview1Page = () => {
  return (
    <div className="flex flex-col justify-start items-start min-h-screen bg-[#D9D9D9] absolute top-0 left-0 z-50">
      <video
        autoPlay
        loop
        muted
        className="w-full h-full object-cover object-center !z-0"
      >
        <source src="/images/bg-homepage.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Preview1Page;
