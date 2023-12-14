/**
 * Card.jsx
 */

"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useAnimation, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { inView } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Card = () => {
  const [data, setData] = useState("");

  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger once when entering the viewport
    threshold: 0.1, // The percentage of the element that must be in the viewport
  });

  const videoVariants = {
    vidoffscreen: {
      y: 70,
      opacity: 0.8,
      scale: 0.9,

      transition: {
        type: "ease",
        duration: 1.2,
      },
    },
    vidonscreen: {
      y: 0,
      scale: 1,
      opacity: 1,
      transition: {
        type: "ease",
        duration: 1.2,
      },
    },
  };
  const descVariants = {
    descoffscreen: {
      y: 70,
      opacity: 0.8,
      // scale: 0.9,

      transition: {
        type: "ease",
        duration: 1.2,
      },
    },
    desconscreen: {
      y: 0,
      scale: 1,
      opacity: 1,
      transition: {
        type: "ease",
        duration: 1.6,
      },
    },
  };
  const op = () => {
    setData("asdasd");

    return "onscreen";
  };

  console.log(data);
  return (
    <div className="w-[80%] mx-auto grid grid-cols-3 min-h-[70vh] gap-10">
      <motion.div
        initial="vidoffscreen"
        whileInView="vidonscreen"
        exit="vidoffscreen"
        variants={videoVariants}
        viewport={{ once: true, amount: 0.1 }}
        className=" mx-auto col-span-2"
        ref={ref}
      >
        <video className="w-full rounded-md h-screen/2" loop muted autoPlay>
          <source src="video.mp4" />
        </video>
      </motion.div>
      <motion.div
        initial="descoffscreen"
        whileInView="desconscreen"
        exit="descoffscreen"
        variants={descVariants}
        viewport={{ once: true, amount: 0.1 }}
        className="col-span-1 flex flex-col gap-4 py-3"
        ref={ref}
      >
        <div className="grid grid-cols-2">
          <div className="col-span-2">
            <h1 className="text-3xl font-bold">This is the first Title</h1>
            <h3 className="text-lg text-neutral-600 font-semibold">
              React, NextJS, Prisma, Mysql (Planetscale)
            </h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Corrupti, laudantium praesentium facere in neque repellat
              blanditiis eos assumenda pariatur est.
            </p>
          </div>

          <Link
            href="https://github.com"
            className="font-semibold py-10 w-full h-full border border-dotted col-span-1 "
          >
            Github
          </Link>
          <Link
            href="/"
            className="font-semibold w-full h-full border border-dotted col-span-1 "
          >
            View Live
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
