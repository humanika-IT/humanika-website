import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { wrap } from "popmotion";
import { TbChevronRight, TbChevronLeft } from "react-icons/tb";
import general from "../styles/General.module.css";

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 99,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const WorkOverlay = ({ filteredList }) => {
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = wrap(
    0,
    filteredList.work_image?.length || filteredList.work_video?.length,
    page
  );

  // useEffect(() => {
  //   setPreview(filteredList.work_image[imageIndex]);
  // }, [filteredList, imageIndex]);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <div className={general.work_preview_container}>
      <button
        className={general.work_preview_prev}
        onClick={() => paginate(-1)}
      >
        <TbChevronLeft />
      </button>
      <div className={general.work_preview_content}>
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={page}
            className={general.work_preview_image_container}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: {
                type: "spring",
                stiffness: 300,
                damping: 40,
              },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
          >
            {filteredList.work_image && (
              <Image
                src={`/images/works/${filteredList.work_image[imageIndex]}`}
                alt={"item"}
                fill
                quality={80}
                sizes="90vw"
                className={general.work_preview_image}
              />
            )}
            {filteredList.work_video && (
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${filteredList.work_video[imageIndex]}`}
                title="YouTube video player"
                frameBorder="0"
                className={general.work_preview_video}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
      <button className={general.work_preview_next} onClick={() => paginate(1)}>
        <TbChevronRight />
      </button>
    </div>
  );
};

export default WorkOverlay;
