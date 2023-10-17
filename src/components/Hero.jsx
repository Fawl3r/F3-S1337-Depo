"use client";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const heroVariants = {
    initial: { opacity: 0, y: -30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 30 },
  };

  return (
    <div className="relative h-[500px] md:h-screen overflow-hidden">
      <video
        autoPlay
        muted
        loop
        className="absolute w-full h-full object-cover"
      >
        <source src={"/bghero.mp4"} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent"></div>
      <motion.div
        className="absolute inset-0 flex flex-col justify-center items-center text-white"
        variants={heroVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", damping: 20, stiffness: 150 }}
        >
          <div className="max-w-2xl py-7 ">
            <h1 className=" text-3xl md:text-6xl font-bold font-mono animate-fade-in tracking-wider antialiased">
              GODS OF GAMING
            </h1>
            <p className=" text-base md:text-lg  tracking-wider  mt-10 mb-7 animate-fade-in-up px-6 antialiased leading-relaxed md:leading-loose">
              Gods Of Gaming (GoG): Pioneering Blockchain Gaming for Empowerment
              and Innovation. Join us to redefine gaming through blockchain,
              empowering gamers, and shaping the future of play.
            </p>
            <a
              href="#F3"
              className="text-white  bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium text-sm  md:text-lg  px-7 py-3 text-center mr-2 mb-2 mt-10 transition duration-500 ease-in-out "
            >
              Get Started
            </a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
