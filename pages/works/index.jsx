import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { wrap } from "popmotion";
import { TbChevronRight, TbChevronLeft } from "react-icons/tb";
import general from "../../styles/General.module.css";

const work_categories = [
  { title: "DESIGN" },
  { title: "DIGITAL" },
  { title: "PHOTOGRAPHY" },
  { title: "VIDEO" },
];

const work_content = [
  { title: "Tulisan Random", category: "DESIGN", url: "mockup-1" },
  { title: "Koleksi Pameran", category: "PHOTOGRAPHY", url: "mockup-2" },
  { title: "Interview Seniman", category: "VIDEO", url: "mockup-3" },
  { title: "Website & Poster", category: "DESIGN", url: "mockup-4" },
  { title: "Produk Makanan Ringan", category: "PHOTOGRAPHY", url: "mockup-5" },
  { title: "Event Gathering", category: "VIDEO", url: "mockup-6" },
  { title: "Design Bro", category: "DESIGN", url: "mockup-7" },
  { title: "Foto Flora dan Fauna", category: "PHOTOGRAPHY", url: "mockup-8" },
  { title: "Video Iklan Pepsi", category: "VIDEO", url: "mockup-9" },
  {
    title: "Logo Kementerian Pariwisata",
    category: "DESIGN",
    url: "mockup-10",
  },
  { title: "Produk Imajinasi", category: "PHOTOGRAPHY", url: "mockup-11" },
  { title: "Profil Seniman", category: "VIDEO", url: "mockup-12" },
];

const WorksTestPage = () => {
  const [categoryActive, setCategoryActive] = useState("DESIGN");
  const [filteredList, setFilteredList] = useState(work_content);
  const [isPreview, setPreview] = useState(false);

  const handleCategoryClick = (e) => {
    setPreview(false);
    return setCategoryActive(e.target.value);
  };

  useEffect(() => {
    setFilteredList(
      work_content.filter((item, index) => item.category === categoryActive)
    );
  }, [categoryActive]);

  const handleWorkClick = (e) => {
    return isPreview === false && setPreview(e.target.value);
  };

  return (
    <div id="change-bg" className={`${general.works_container}`}>
      <h1 className={general.works_title}>CREATIVE WORKS</h1>
      <div className={general.works_category}>
        {work_categories.map((item, index) => {
          return (
            <button
              key={`category-${index}`}
              value={item.title}
              onClick={handleCategoryClick}
              className={
                categoryActive === item.title
                  ? general.category_active
                  : general.category_passive
              }
            >
              {item.title}
            </button>
          );
        })}
      </div>
      <AnimatePresence mode="wait">
        {isPreview ? (
          <WorkPreviewComponent
            filteredList={filteredList}
            isPreview={isPreview}
            setPreview={setPreview}
          />
        ) : (
          <WorkListComponent
            categoryActive={categoryActive}
            setCategoryActive={setCategoryActive}
            filteredList={filteredList}
            handleWorkClick={handleWorkClick}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default WorksTestPage;

const WorkListComponent = ({ filteredList, handleWorkClick }) => {
  return (
    <motion.div
      key={"close"}
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
          {filteredList.map((item, index) => {
            return (
              <motion.button
                key={`work-${item.url}`}
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
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 1 }}
                value={item.url}
                onClick={handleWorkClick}
                className="relative group"
              >
                <div className={general.work_container}>
                  <Image
                    src={`/images/works/${item.url}.png`}
                    alt={item.title}
                    fill
                    sizes="(max-width: 639px) 256px,
                      (min-width: 640px) 192px,
              (min-width: 1024px) 240px,
              256px"
                    className="object-center object-cover pointer-events-none"
                  />
                </div>
                <div className="absolute bottom-0 left-0 w-full h-0 p-4 flex flex-col justify-center items-center bg-[#003C5899] opacity-0 group-hover:h-full group-hover:opacity-100 transition-all pointer-events-none">
                  <h1 className="text-[14px] text-white font-bold tracking-wider">
                    {item.title}
                  </h1>
                  <span className="mt-2 text-[10px] text-white font-light tracking-widest">
                    {item.category}
                  </span>
                </div>
              </motion.button>
            );
          })}
        </LayoutGroup>
      </AnimatePresence>
    </motion.div>
  );
};

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
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

const WorkPreviewComponent = ({ filteredList, isPreview, setPreview }) => {
  const [[page, direction], setPage] = useState([
    filteredList.findIndex((item) => item.url === isPreview),
    0,
  ]);

  const imageIndex = wrap(0, filteredList.length, page);

  useEffect(() => {
    setPreview(filteredList[imageIndex].url);
  }, [filteredList, imageIndex]);

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
      <AnimatePresence initial={false} custom={direction}>
        <LayoutGroup>
          <button
            className="hidden md:block text-[48px] text-primaryBlue"
            onClick={() => paginate(-1)}
          >
            <TbChevronLeft />
          </button>

          {filteredList
            .filter((item, index) => item.url === isPreview)
            .map((item, index) => {
              return (
                <motion.div
                  key={item.url}
                  className={`max-w-[800px] md:mx-12`}
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
                    src={`/images/works/detail-${item.url}.png`}
                    alt={item.title}
                    width={800}
                    height={600}
                    className="object-center object-contain pointer-events-none"
                  />
                </motion.div>
              );
            })}
          <button
            className="hidden md:block text-[48px] text-primaryBlue"
            onClick={() => paginate(1)}
          >
            <TbChevronRight />
          </button>
        </LayoutGroup>
      </AnimatePresence>
    </motion.div>
  );
};
// HiOutlineChevronRight;
// HiOutlineChevronLeft;
