"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaDiscord, FaYoutube } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { HiMenuAlt1 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{
        type: "spring",
        damping: 20,
        stiffness: 150,
        duration: 0.7,
      }}
      className=" p-4 h-24 relative shadow-md no-scrollbar"
    >
      <div className="container mx-auto h-full flex justify-between items-center z-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", damping: 20, stiffness: 150 }}
        >
          <Link href="/">
            <Image
              className="cursor-pointer transform hover:scale-110 transition duration-500 ease-in-out"
              src={"/Zeus-LOGOxx.png"}
              width={180}
              height={180}
              alt="Gods of Gaming"
            />
          </Link>
        </motion.div>
        <div className="hidden md:flex space-x-9 items-center ml-auto">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="#nftart"
              className="transition duration-500 ease-in-out hover:text-blue-400"
            >
              NFT Artwork
            </Link>
          </motion.div>
          <motion.div
            className="relative cursor-pointer  hover:text-blue-400"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            F3 Dominion
            {isDropdownOpen && (
              <div
                className="absolute left-1/2 transform -translate-x-1/2 bg-gradient-to-b from-black to-slate-800  text-white p-2 shadow-md transition duration-500 ease-in-out z-50"
                style={{ minWidth: "280px", width: "auto" }}
              >
                <div className="space-y-3 flex flex-col w-full items-center m-2">
                  <Link
                    className="cursor-pointer transition duration-500 ease-in-out  hover:text-blue-400"
                    href="https://f3-nexium-marketplace.vercel.app/"
                    target="_blank"
                  >
                    Nexium NFT Marketplace
                  </Link>
                  <Link
                    className="cursor-pointer transition duration-500 ease-in-out  hover:text-blue-400"
                    href="https://f3-limited-edition.vercel.app/"
                    target="_blank"
                  >
                    Limited Edition NFT Marketplace
                  </Link>
                  <Link
                    className="cursor-pointer transition duration-500 ease-in-out  hover:text-blue-400 "
                    href="https://f3-liveraffle.vercel.app/"
                    target="_blank"
                  >
                    Raffle Machine #1
                  </Link>
                  <Link
                    className="cursor-pointer transition duration-500 ease-in-out  hover:text-blue-400"
                    href="https://f3-liveraffle.vercel.app/"
                    target="_blank"
                  >
                    Raffle Machine #2
                  </Link>
                  <Link
                    className="cursor-pointer transition duration-500 ease-in-out  hover:text-blue-400"
                    href="https://f3-packs.vercel.app/"
                    target="_blank"
                  >
                    F3 Packs
                  </Link>
                </div>
              </div>
            )}
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="https://gods-of-gaming.gitbook.io/gods-of-gaming-whitepaper/"
              target="_blank"  // Add this if you want the link to open in a new tab
              className="transition duration-500 ease-in-out hover:text-blue-400"
            >
              Whitepaper
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              damping: 20,
              stiffness: 150,
              duration: 1,
            }}
          >
            <Link href="https://www.youtube.com/@Fawl3r" target="_blank">
              <FaYoutube
                className="cursor-pointer transition duration-700 ease-in-out hover:text-red-600"
                size={30}
              />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              damping: 20,
              stiffness: 150,
              duration: 1,
            }}
          >
            <Link href="https://discord.com/invite/67ZVXVQSfX" target="_blank">
              <FaDiscord
                className="cursor-pointer transition duration-700 ease-in-out hover:text-blue-500"
                size={30}
              />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              damping: 20,
              stiffness: 150,
              duration: 1,
            }}
          >
            <Link href="https://twitter.com/GOG__Official_" target="_blank">
              <RiTwitterXFill
                className="cursor-pointer transition duration-700 ease-in-out hover:text-gray-600"
                size={30}
              />
            </Link>
          </motion.div>
        </div>
        <div className="md:hidden">
          <button className="mr-4" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <AiOutlineClose size={30} />
            ) : (
              <HiMenuAlt1 size={30} />
            )}
          </button>
        </div>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed top-20 right-0 z-50 w-3/5 h-3/5 bg-gradient-to-b from-black to-slate-800 p-4 "
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%", transition: { duration: 0.8 } }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col space-y-7 text-white items-center m-4">
              <Link href="#nft" className="text-2xl">
                NFT Artwork
              </Link>
              <Link href="#F3" className="text-2xl">
                F3 Dominion
              </Link>
              <Link href="https://f3-packs.vercel.app/" className="text-2xl">
                F3 Packs
              </Link>
              <Link href="#white" className="text-2xl">
                Whitepaper
              </Link>

              {/* Add more mobile menu links here */}
              <div className="flex space-x-4 py-8">
                <FaYoutube
                  className="cursor-pointer transition duration-500 ease-in-out hover:bg-red-600"
                  size={30}
                />
                <FaDiscord
                  className="cursor-pointer transition duration-500 ease-in-out"
                  size={30}
                />
                <RiTwitterXFill
                  className="cursor-pointer transition duration-500 ease-in-out"
                  size={30}
                />
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
