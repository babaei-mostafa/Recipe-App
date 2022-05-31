import React from "react";
import { Link } from "react-router-dom";

const Log = () => {
  return (
    <div className="flex justify-center md:justify-end">
      <Link
        to="#"
        className="btn text-primary md:border-2 border-primary hover:bg-primary hover:text-white transition ease-out duration-500"
      >
        Log In
      </Link>
      <Link
        to="#"
        className="btn text-primary ml-2 md:border-2 border-primary hover:bg-primary hover:text-white transition ease-out duration-500"
      >
        Log Out
      </Link>
    </div>
  );
};

export default Log;
