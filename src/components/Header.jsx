import React from "react";
import { FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <div className="flex justify-between">
      <div className="flex gap-2 items-center justify-center">
        <img src="./src/assets/Logo.svg" alt="Logo" />
        <button className="bg-gradient-to-r
        from-orange-400 to-red-400 rounded-2xl text-white text-xs px-2.5 py-1.5" >Hosterr is hiring!</button>
      </div>
      <div>
        <ul className="hidden lg:flex justify-center items-center font-lato text-gray-400 gap-6">
          <li>
            <a href="#">Plans</a>
          </li>
          <li>
            <a href="#">Find Domain</a>
          </li>
          <li>
            <a href="#">Why Hosterr</a>
          </li>
        </ul>
      </div>
      <div className="hidden lg:flex gap-6 justify-center items-center font-lato ">
        <a className="text-gray-400" href="#">Sign in</a>
        <button className="bg-blue-400 text-white rounded-md px-4 py-3 hover:bg-blue-600">Join Waitlist</button>
      </div>

      <div className="lg:hidden">
        <FaBars />
      </div>
    </div>
  );
};

export default Header;
