import React, { useState, useEffect } from "react";
import { NEW_PRODUCTS_INTRO, WELCOME_MESSAGE } from "../constants";

import logo from "../assets/gperfect.png";
import { BiSearch } from "react-icons/bi";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
};

const Intropage = () => {
  const { width, height } = useWindowDimensions();

  // Determine if the viewport dimensions match the hide criteria
  const shouldHideSection = width <= 904 && height <= 400;

  return (
    <div className="h-screen flex flex-col bg-cover">
      <div className="flex-grow flex justify-center items-center mt-20">
        <div className="flex flex-col text-center items-center py-10 px-6 md:px-20 w-11/12 md:w-1/2 bg-blue-600 rounded-3xl bg-opacity-75 text-white">
          <h1 className="text-4xl md:text-4xl font-bold">IoT device management</h1>
          <p className={`my-4 max-w-xl py-4 font-light tracking-tighter text-base md:text-lg ${shouldHideSection ? 'hidden' : 'block'}`}>
            {WELCOME_MESSAGE}
          </p>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Intropage;
