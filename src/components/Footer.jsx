import React from "react";
import { FaDiscord, FaYoutube } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import Link from "next/link";
const Footer = () => {
  return (
    <div className=" bg-gray-800 w-full py-5">
      <div className="flex flex-col items-center justify-center">
        <p className="mb-4 text-white">
          &copy; {new Date().getFullYear()} Gods Of Gaming. All rights reserved.
        </p>
        <div className="flex flex-row space-x-4">
          <Link href="https://www.youtube.com/@Fawl3r" target="_blank">
            <FaYoutube
              className="cursor-pointer transition duration-700 ease-in-out hover:text-red-600"
              size={30}
            />
          </Link>
          <Link href="https://discord.com/invite/67ZVXVQSfX" target="_blank">
            <FaDiscord
              className="cursor-pointer transition duration-700 ease-in-out hover:text-blue-500"
              size={30}
            />
          </Link>
          <Link href="https://twitter.com/GOG__Official_" target="_blank">
            <RiTwitterXFill
              className="cursor-pointer transition duration-700 ease-in-out hover:text-gray-600"
              size={30}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
