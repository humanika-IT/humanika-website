import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import general from "../../styles/General.module.css";

const work_categories = [
  { title: "ALL" },
  { title: "DESIGN" },
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
  { title: "Event Gathering", category: "DESIGN", url: "mockup-7" },
  { title: "Event Gathering", category: "PHOTOGRAPHY", url: "mockup-8" },
  { title: "Event Gathering", category: "VIDEO", url: "mockup-9" },
  { title: "Event Gathering", category: "DESIGN", url: "mockup-10" },
  { title: "Event Gathering", category: "PHOTOGRAPHY", url: "mockup-11" },
  { title: "Event Gathering", category: "VIDEO", url: "mockup-12" },
];

const WorksIndexPage = () => {
  const [categoryActive, setCategoryActive] = useState("ALL");

  const handleClick = (e) => {
    return (
      e.target.value !== categoryActive && setCategoryActive(e.target.value)
    );
  };

  return (
    <div className={general.works_container}>
      <h1 className={general.works_title}>CREATIVE WORKS</h1>
      <div className={general.works_category}>
        {work_categories.map((item, index) => {
          return (
            <button
              key={`category-${index}`}
              value={item.title}
              onClick={handleClick}
              className={
                categoryActive === item.title ? general.category_active : ""
              }
            >
              {item.title}
            </button>
          );
        })}
      </div>
      <div className={general.works_list}>
        <AnimatePresence mode="wait">
          <LayoutGroup>
            {work_content
              .filter((item, index) =>
                categoryActive !== "ALL"
                  ? item.category === categoryActive
                  : item
              )
              .map((item, index) => {
                return (
                  <motion.div
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
                  >
                    <div className={general.work_container}>
                      <Image
                        src={`/images/works/${item.url}.png`}
                        alt={item.title}
                        fill
                        sizes="(max-width: 639px) 256px,
                      (min-width: 640px) 192px,
              (min-width: 1024px) 240px,
              33vw"
                        className="object-center object-cover"
                      />
                    </div>
                  </motion.div>
                );
              })}
          </LayoutGroup>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default WorksIndexPage;
