import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { wrap } from "popmotion";
import { TbChevronRight, TbChevronLeft } from "react-icons/tb";
import general from "../../../styles/General.module.css";
import typography from "../../../styles/Typography.module.css";
import works_list from "./../../../data/works.json";

import { IoMdCloseCircle } from "react-icons/io";

// IoMdCloseCircle;

const WorksTemplatePage = ({ works_list }) => {
  const { works_category_title, works_category_url, works_subs } = works_list;

  // const [categoryActive, setCategoryActive] = useState(null);
  const [filteredList, setFilteredList] = useState(null);
  const [isPreview, setPreview] = useState(false);

  // const handleCategoryClick = (e) => {
  //   setPreview(false);
  //   return setCategoryActive(e.target.value);
  // };

  useEffect(() => {
    // console.log(isPreview);
    isPreview &&
      setFilteredList(
        works_subs.filter((item, index) => item.work_url === isPreview)[0]
      );

    return () => setFilteredList(null);
  }, [isPreview]);

  useEffect(() => {
    console.log(filteredList);
  }, [filteredList]);

  const handleWorkClick = (e) => {
    return isPreview === false && setPreview(e.target.value);
  };

  return (
    <div className={general.works_container}>
      {/* <div className={general.works_container}> */}
      {/* <h1 className={typography.page_title}>{works_category_url.toUpperCase()}</h1> */}
      <motion.div
        key={works_category_url}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{
          duration: 0.2,
        }}
        className={general.works_list}
      >
        <AnimatePresence mode="wait">
          <LayoutGroup>
            {works_subs.map((item, index) => {
              return (
                <motion.button
                  key={`work-${item.work_url}`}
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{
                    duration: 0.2,
                    type: "spring",
                    stiffness: 300,
                    damping: 25,
                  }}
                  layout="position"
                  // whileHover={{ scale: 1.05 }}
                  // whileTap={{ scale: 1 }}
                  value={item.work_url}
                  onClick={handleWorkClick}
                  className="relative group"
                >
                  <div className={general.work_container}>
                    <Image
                      src={item.work_subs_cover}
                      alt={item.work_subs_title}
                      fill
                      sizes="(min-width: 640px) 33vw,50vw"
                      className="object-center object-cover pointer-events-none"
                      placeholder="blur"
                      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkiAYAAGEAXWDbSoIAAAAASUVORK5CYII="
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-0 p-4 flex flex-col justify-center items-center bg-[#003C5899] opacity-0 group-hover:h-full group-hover:opacity-100 transition-all pointer-events-none">
                    <h1 className="text-[12px] md:text-sm text-white font-bold tracking-wider">
                      {item.work_subs_title}
                    </h1>
                    <span className="mt-2 text-[10px] md:text-xs text-white font-normal tracking-widest">
                      {works_category_title.toUpperCase()}
                    </span>
                  </div>
                </motion.button>
              );
            })}
          </LayoutGroup>
        </AnimatePresence>
      </motion.div>
      {isPreview && (
        <div
          className={`fixed top-0 left-0 w-screen h-screen backdrop-blur-sm backdrop-brightness-75 z-50 flex flex-col justify-center items-center transition-all`}
        >
          <button
            onClick={() => setPreview(false)}
            className="absolute top-8 right-8 text-4xl text-white hover:text-secondaryPink"
          >
            <IoMdCloseCircle />
          </button>
          {filteredList && (
            <WorkOverlayComponent
              filteredList={filteredList}
              isPreview={isPreview}
              setPreview={setPreview}
            />
          )}
        </div>
      )}
      {/* </div> */}
    </div>
  );
};

export default WorksTemplatePage;

export const getStaticPaths = () => {
  //   const res = await fetch(
  //     `${process.env.NEXT_PUBLIC_ASSETS}/botanical/data/data_botanical.json`
  //   );
  //   const pathFetch = await res.json();

  //   const paths = await pathFetch.map((item, index) => ({
  //     params: {
  //       perupa: _.kebabCase(item.name),
  //     },
  //   }));
  const paths = works_list.map((item, index) => ({
    params: {
      category: item.works_category_url,
    },
  }));

  return {
    paths,
    fallback: false, // false or 'blocking'
  };
};

export const getStaticProps = ({ params }) => {
  //   const res = await fetch(
  //     `${process.env.NEXT_PUBLIC_ASSETS}/botanical/data/data_botanical.json`,
  //     {
  //       method: "GET",
  //     }
  //   );
  //   const data_perupa = await res.json();

  const filtered = works_list.filter(
    (item, index) => item.works_category_url === params.category
  );

  if (!works_list) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      works_list: filtered[0],
    },
    revalidate: 1,
  };
};

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

const WorkOverlayComponent = ({ filteredList, isPreview, setPreview }) => {
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = wrap(0, filteredList.work_image.length, page);

  // useEffect(() => {
  //   setPreview(filteredList.work_image[imageIndex]);
  // }, [filteredList, imageIndex]);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <motion.div
      key={"open"}
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{
        duration: 0.2,
      }}
      className={general.work_preview_container}
    >
      <button
        className="absolute md:relative top-[50%] md:top-0 left-2 md:left-0 block text-3xl md:text-[48px] text-white md:text-primaryBlue backdrop-brightness-75 md:backdrop-brightness-100 z-[100]"
        onClick={() => paginate(-1)}
      >
        <TbChevronLeft />
      </button>
      <AnimatePresence mode="wait" initial={false} custom={direction}>
        <LayoutGroup>
          <motion.div
            key={filteredList.work_image[imageIndex]}
            className={`w-[100vw] md:w-[60vw] h-[100vw] md:h-[50vw] relative`}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: {
                type: "spring",
                stiffness: 400,
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
            <Image
              src={filteredList.work_image[imageIndex]}
              alt={"item"}
              // width={800}
              // height={600}
              fill
              sizes="(min-width: 640px) 33vw, 50vw"
              className="object-center object-contain pointer-events-none"
            />
          </motion.div>
        </LayoutGroup>
      </AnimatePresence>
      <button
        className="absolute md:relative top-[50%] md:top-0 right-2 md:right-0 block text-3xl md:text-[48px] text-white md:text-primaryBlue backdrop-brightness-75 md:backdrop-brightness-100 z-[100]"
        onClick={() => paginate(1)}
      >
        <TbChevronRight />
      </button>
    </motion.div>
  );
};
