import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import nasaapi from "./nasaapi";
import Bg1 from "./assets/1.jpg";
const Landing = () => {
  return (
    <>
      <Navbar />
      <div
        className="h-screen w-full bg-black flex items-center justify-center bg-no-repeat bg-cover size-full z-0"
        style={{ backgroundImage: `url(${Bg1})` }}
      >
        <h1 className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-5xl ">
          Explore the Universe with Stellar Watch
        </h1>
      </div>
    </>
  );
};

export default Landing;
