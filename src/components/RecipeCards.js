import React, { useContext } from "react";
import { RecipeContext } from "./RecipeContext";
import SingleRecipeCard from "./SingleRecipeCard";

const RecipeCards = () => {
  const recipeContext = useContext(RecipeContext);

  return (
    <ul className="pt-8 grid md:grid-cols-3 gap-10 border-b border-gray-200 pb-4">
      {recipeContext.recipes.map((recipe) => (
        <li key={recipe.id}>
          <SingleRecipeCard recipe={recipe} />
        </li>
      ))}
    </ul>
  );
};

export default RecipeCards;
