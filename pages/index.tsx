import React from "react";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
// import { Tab } from '@headlessui/react';
import { motion } from "framer-motion";
const inter = Inter({ subsets: ["latin"] });

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Home() {
  const sectionsRef = React.useRef<HTMLDivElement>(null);
  const [sections, setSections] = React.useState([
    {
      name: "plans",
      x: 10
    },
    {
      name: "articles",
      x: 10,
    },
    {
      name: "musics",
      x: 10,
    },
    {
      name: "thoughts",
      x: 10,
    },
  ]);

  function handleHoverStart(
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) {
    const itemID = e.currentTarget.getAttribute("itemID");
    if (itemID)
      setSections(
        sections.map((section) => {
          if (section.name === itemID) {
            return {
              name: section.name,
              x: 30,
            };
          }
          return section;
        })
      );
  }

  function handleHoverEnd(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    const itemID = e.currentTarget.getAttribute("itemID");
    if (itemID)
      setSections(
        sections.map((section) => {
          if (section.name === itemID) {
            return {
              name: section.name,
              x: 10,
            };
          }
          return section;
        })
      );
  }

  return (
    <>
      <div className="font-NewYork p-32 tracking-widest">
        Chen's personal website
      </div>
      <div className="grid grid-cols-2 gap-8" ref={sectionsRef}>
        {sections.map((section) => (
          <a
            itemID={section.name}
            href={`/${section.name}`}
            className="h-20"
            onMouseEnter={handleHoverStart}
            onMouseLeave={handleHoverEnd}
            key={section.name}
          >
            <h2 className={inter.className}>
              <span className="font-semibold">{section.name}</span>
              <motion.div className="inline-block" animate={{ x: section.x }}>
                -&gt;
              </motion.div>
            </h2>
          </a>
        ))}
      </div>
    </>
  );
}
