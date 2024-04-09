import React from "react";

const Navbar = () => {
  return (
    <nav className="absolute top-0 w-full">
      <div className=" flex items-center justify-between  p-4 ">
        {/* this has to be put in react router */}
        <a href="#" className="">
          <span className="self-center text-2xl font-semibold  text-white ml-24">
            StellarWatch
          </span>
        </a>

        <div className="hidden  md:block md:w-auto mr-24 text-lg">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 md:border-0 text-white">
            <li>
              <p className="hover:underline hover:underline-offset-8">
                Astronomical events
              </p>
            </li>
            <li>
              <p
                className="hover:underline hover:underline-offset-8"
                href="#Nasa"
              >
                Nasa Space Events
              </p>
            </li>
            <li>
              <p className="hover:underline hover:underline-offset-8">
                SpaceX space events
              </p>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
