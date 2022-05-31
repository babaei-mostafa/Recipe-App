import React, { useContext } from "react";
import { BsClockFill, BsFillTrashFill } from "react-icons/bs";
import { RecipeContext } from "./RecipeContext";
import { ACTIONS } from "./RecipeContext";

const SingleRecipeCard = ({ recipe }) => {
  const recipeContext = useContext(RecipeContext);

  const handleDelete = () => {
    recipeContext.dispatch({
      type: ACTIONS.DELETE_RECIPE,
      payload: { id: recipe.id },
    });
  };

  return (
    <div className="card">
      <img
        src={recipe.img}
        alt={recipe.title}
        className="w-full h-32 sm:h-48 object-cover"
      />
      <div className="m-4">
        <span className="font-bold">{recipe.title}</span>
        <button
          onClick={() => handleDelete(recipe.id)}
          className="hover:bg-primary text-white absolute top-0 right-0 mt-2 mr-2"
        >
          <BsFillTrashFill />
        </button>
        <p>{recipe.des}</p>
        <span className="text-gray-500 text-sm">
          Written by {recipe.author}
        </span>
        <div className="badge">
          <span>
            <BsClockFill className="inline-block" /> {recipe.time} mins
          </span>
        </div>
      </div>
    </div>
  );
};

export default SingleRecipeCard;
