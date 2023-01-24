import React from "react";

const Preview2Page = () => {
  return (
    <div className="flex flex-col justify-start items-start h-screen w-screen bg-[#D9D9D9] absolute top-0 left-0 z-[100]">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 h-screen w-screen object-cover object-center"
      >
        <source src="/images/bg-homepage.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Preview2Page;
