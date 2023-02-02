import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { wrap } from "popmotion";
import { TbChevronRight, TbChevronLeft } from "react-icons/tb";
import general from "../../../styles/General.module.css";
import typography from "../../../styles/Typography.module.css";
import works_list from "./../../../data/works.json";

import { IoMdCloseCircle } from "react-icons/io";
import WorkOverlay from "../../../components/WorkOverlay";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.2,
    },
    duration: 0.2,
  },
};

const child = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

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

  const handleWorkClick = (e) => {
    return isPreview === false && setPreview(e.target.value);
  };

  return (
    <div className={general.works_container}>
      {/* <h1 className={typography.page_title}>{works_category_url.toUpperCase()}</h1> */}
      <AnimatePresence mode="wait">
        <motion.div
          key={works_category_url}
          // initial={{ x: 10, opacity: 0 }}
          // animate={{ x: 0, opacity: 1 }}
          // exit={{ x: -10, opacity: 0 }}
          // transition={{
          //   delayChildren: 0.3,
          //   staggerChildren: 0.2,
          //   duration: 0.2,
          // }}
          variants={container}
          initial="hidden"
          animate="visible"
          className={general.works_list}
        >
          {works_subs.map((item, index) => {
            return (
              <motion.button
                key={`work-${item.work_url}`}
                // initial={{ y: 10, opacity: 0 }}
                // animate={{ y: 0, opacity: 1 }}
                // exit={{ y: -10, opacity: 0 }}
                // transition={{
                //   duration: 0.2,
                //   type: "spring",
                //   stiffness: 300,
                //   damping: 25,
                // }}
                // layout="position"
                variants={child}
                value={item.work_url}
                onClick={handleWorkClick}
                className={`${general.work_btn} group`}
              >
                <div className={general.work_container}>
                  <Image
                    src={`/images/works/${item.work_subs_cover}`}
                    alt={item.work_subs_title}
                    fill
                    sizes="(min-width: 640px) 33vw,50vw"
                    className={general.work_image}
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkiAYAAGEAXWDbSoIAAAAASUVORK5CYII="
                  />
                </div>
                <div
                  className={`${general.work_overlay} group-hover:opacity-100`}
                >
                  <h1 className={general.work_overlay_title}>
                    {item.work_subs_title}
                  </h1>
                  <span className={general.work_overlay_subtitle}>
                    {works_category_title.toUpperCase()}
                  </span>
                </div>
              </motion.button>
            );
          })}
        </motion.div>
      </AnimatePresence>
      {isPreview && (
        <AnimatePresence mode="wait">
          <motion.div
            key={"open"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.2,
            }}
            className={general.work_preview_backdrop}
          >
            <button
              onClick={() => setPreview(false)}
              className={general.work_preview_close}
            >
              <IoMdCloseCircle />
            </button>
            {filteredList && <WorkOverlay filteredList={filteredList} />}
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};

export default WorksTemplatePage;

export const getStaticPaths = () => {
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
