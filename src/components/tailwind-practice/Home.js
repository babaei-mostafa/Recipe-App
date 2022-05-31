import React from "react";
import { Link } from "react-router-dom";
import { BsClockFill } from "react-icons/bs";

const Home = () => {
  return (
    <div className="md:col-span-2">
      <main className="px-16 py-6">
        <div className="flex justify-center md:justify-end">
          <Link
            to="#"
            className="btn text-primary border-primary md:border-2 hover:bg-primary hover:text-white transition ease-out duration-500"
          >
            Log in
          </Link>
          <Link
            to="#"
            className="btn text-primary ml-2 border-primary md:border-2 hover:bg-primary hover:text-white transition ease-out duration-500"
          >
            Sign up
          </Link>
        </div>

        <header>
          <h2 className="text-gray-700 text-6xl font-semibold">Recipes</h2>
          <h3 className="text-2xl font-semibold">For Ninjas</h3>
        </header>

        <div>
          <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">
            Latest Recipes
          </h4>

          <div className="pt-8 grid lg:grid-cols-3 gap-10 ">
            {/* cards go here */}
            <div className="card hover:shadow-lg">
              <img
                src="img/stew.jpg"
                alt="stew"
                className="w-full h-32 sm:h-48 object-cover"
              />
              <div className="m-4">
                <span className="font-bold">5 Bean Chili Stew</span>
                <span className="block text-gray-500 text-sm">
                  Recipe by Mario
                </span>
              </div>
              <div className="badge">
                <span>
                  <BsClockFill className="inline" /> 25 mins
                </span>
              </div>
            </div>
            <div className="card hover:shadow-lg">
              <img
                src="img/Noodles.jpg"
                alt="noodles"
                className="w-full h-32 sm:h-48 object-cover"
              />
              <div className="m-4">
                <span className="font-bold">Veg Noodles</span>
                <span className="block text-gray-500 text-sm">
                  Recipe by Mario
                </span>
              </div>
              <div className="badge">
                <span>
                  <BsClockFill className="inline" /> 25 mins
                </span>
              </div>
            </div>
            <div className="card hover:shadow-lg">
              <img
                src="img/Curry.jpg"
                alt="curry"
                className="w-full h-32 sm:h-48 object-cover"
              />
              <div className="m-4">
                <span className="font-bold">Curry</span>
                <span className="block text-gray-500 text-sm">
                  Recipe by Mario
                </span>
              </div>
              <div className="badge">
                <span>
                  <BsClockFill className="inline" /> 25 mins
                </span>
              </div>
            </div>
          </div>

          <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">
            Most Popular
          </h4>

          <div className="pt-8">{/* cards go here  */}</div>
        </div>

        <div className="flex justify-center">
          <div className="btn text-secondary-200 bg-secondary-100 hover:shadow-inner transform hover:scale-125 hover:opacity-50 transition ease-out duration-150">
            Load more
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
