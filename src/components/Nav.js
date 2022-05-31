import React from "react";
import { Link } from "react-router-dom";
import {
  BsHouseDoorFill,
  BsQuestionCircleFill,
  BsEnvelopeOpenFill,
  BsBorderWidth,
} from "react-icons/bs";

const Nav = () => {
  return (
    <div className="md:col-span-1 md:flex md:justify-end">
      <nav className="text-right text-sm mt-6">
        <div className="text-left md:text-right flex justify-between items-center">
          <h1 className="font-bold uppercase p-4 border-b border-gray-100">
            <Link to="/" className="hover:text-gray-700">
              Recipe App
            </Link>
          </h1>
          <div className="px-4 cursor-pointer md:hidden">
            <BsBorderWidth />
          </div>
        </div>
        <ul className="hidden md:block">
          <li className="text-gray-700 font-bold py-1">
            <Link to="/" className="flex justify-end border-r-4 border-primary">
              <span className="">Home</span>{" "}
              <BsHouseDoorFill className="mx-2" />
            </Link>
          </li>
          <li className="py-1">
            <Link
              to="/about"
              className="flex justify-end border-r-4 border-gray-100"
            >
              <span>About</span> <BsQuestionCircleFill className="mx-2" />
            </Link>
          </li>
          <li className="py-1">
            <Link
              to="/contact"
              className="flex justify-end border-r-4 border-gray-100"
            >
              <span>Contact</span> <BsEnvelopeOpenFill className="mx-2" />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
