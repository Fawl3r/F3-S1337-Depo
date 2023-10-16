"use client";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
const WhitePaper = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5, // Customize the threshold based on your preference
  });

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      // Trigger animations when the component is in view
      controls.start("visible");
    }
  }, [inView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.5 } },
  };

  return (
    <div className="container mx-auto py-7 h-auto md:h-screen mt-4">
      <motion.div
        className="flex flex-col items-center justify-center mt-4 md:mt-32 mx-auto"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <motion.div
          className="text-white text-center"
          variants={buttonVariants}
        >
          <div className="p-4 w-full md:w-3/4 lg:w-1/2 mx-auto" id="white">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 antialiased tracking-wide">
              Whitepaper
            </h2>
            <p className="text-white text-base md:text-lg text-center whitespace-normal antialiased tracking-wide leading-8">
              Welcome to the Gods Of Gaming Whitepaper. This document is the
              foundation of our project, providing you with a comprehensive
              insight into our mission, vision, and the innovative world of
              blockchain gaming that we&apos;re crafting.
            </p>
            <motion.button
              className="text-white  bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium text-sm  md:text-lg  px-7 py-3 text-center mr-2 mb-2 mt-10 transition duration-500 ease-in-out"
              variants={buttonVariants}
            >
              <Link
                href="https://gods-of-gaming.gitbook.io/gods-of-gaming-whitepaper/"
                target="_blank"
              >
                Read WhitePaper
              </Link>
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default WhitePaper;
