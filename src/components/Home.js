import React from "react";
import Log from "./Log";
import RecipeCards from "./RecipeCards";
import RecipeInputs from "./RecipeInputs";

const Home = () => {
  return (
    <div className="col-span-2">
      <main className="px-16 py-6">
        <Log />
        <header>
          <h2 className="text-gray-700 text-6xl font-semibold">Recipes</h2>
          <h3 className="text-2xl font-semibold">For Fitness Enthusiasts</h3>
        </header>
        <div>
          <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">
            Latest Recipes
          </h4>
          <div>
            <RecipeCards />
          </div>
        </div>
        <div>
          <RecipeInputs className="mt-2" />
        </div>
      </main>
    </div>
  );
};

export default Home;
