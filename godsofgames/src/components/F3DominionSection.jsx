"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import Head from "next/head";

const ResponsiveGridComponent = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
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
    <div
      className="container mx-auto py-7 h-full  md:h-screen flex items-center justify-center"
      id="F3"
    >
      <div className="max-w-5xl mx-auto my-2 md:my-24">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center"
          ref={ref}
          initial="hidden"
          animate={controls}
        >
          <motion.div className="text-white" variants={buttonVariants}>
            <div className="p-4">
              <h2 className="text-3xl md:text-5xl font-semibold mb-4 antialiased tracking-wide">
                F3 Dominion
              </h2>
              <p className="text-white text-base md:text-lg antialiased tracking-wide leading-relaxed md:leading-loose">
                F3 Dominion&apos;s digital odyssey, where blockchain meets
                immersive gameplay. NFT warriors lead in a Play-to-Earn
                ecosystem with a vast NFT marketplace. Conquer adventures,
                battles, and treasures as an F3 Warrior. Engage in a
                community-driven space where every asset tells a story.
                Experience the future of gaming and blockchain innovation.
              </p>
              <motion.button
                className="text-white  bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium text-sm  md:text-lg  px-7 py-3 text-center mr-2 mb-2 mt-10 transition duration-500 ease-in-out"
                variants={buttonVariants}
              >
                <Link href="/F3Dominion">Explore F3 Dominion</Link>
              </motion.button>
            </div>
          </motion.div>
          <motion.div className="p-4 mx-2" variants={buttonVariants}>
            <div
              className="relative w-full h-0"
              style={{ paddingBottom: "100%" }}
            >
              <img
                src="/dom.gif"
                alt="nft"
                className="absolute inset-0 w-full h-full object-cover rounded-md hover:shadow-lg"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ResponsiveGridComponent;
