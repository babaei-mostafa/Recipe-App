import React, { useContext, useEffect } from "react";
import { RecipeContext } from "./RecipeContext";
import { ACTIONS } from "./RecipeContext";

const RecipeInputs = () => {
  const recipeContext = useContext(RecipeContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    recipeContext.dispatch({
      type: ACTIONS.ADD_RECIPE,
      payload: {
        title: recipeContext.title,
        des: recipeContext.des,
        author: recipeContext.author,
        time: recipeContext.time,
        img: recipeContext.imageUrl,
      },
    });
    recipeContext.setTitle("");
    recipeContext.setDes("");
    recipeContext.setAuthor("");
    recipeContext.setTime(5);
    recipeContext.setSelectedImage(null);
  };

  useEffect(() => {
    if (recipeContext.selectedImage) {
      recipeContext.setImageUrl(
        URL.createObjectURL(recipeContext.selectedImage)
      );
    }
  }, [recipeContext.selectedImage]);

  return (
    <div className="mt-8 text-sm border border-gray-200 p-6 rounded">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-4 justify-center">
          <div className="grid grid-cols-2 ">
            <label className="">Recipe Title</label>
            <input
              type="text"
              value={recipeContext.title}
              onChange={(e) => recipeContext.setTitle(e.target.value)}
              required
            />
          </div>
          <div className="grid grid-cols-2">
            <label>Description</label>
            <textarea
              value={recipeContext.des}
              onChange={(e) => recipeContext.setDes(e.target.value)}
              required
            />
          </div>
          <div className="grid grid-cols-2">
            <label>Author's Name</label>
            <input
              type="text"
              value={recipeContext.author}
              onChange={(e) => recipeContext.setAuthor(e.target.value)}
              required
            />
          </div>
          <div className="grid grid-cols-2">
            <label>Time</label>
            <input
              type="number"
              value={recipeContext.time}
              onChange={(e) => recipeContext.setTime(e.target.value)}
            />
          </div>
          <div>
            <input
              accept="image/*"
              type="file"
              id="select-image"
              onChange={(e) =>
                recipeContext.setSelectedImage(e.target.files[0])
              }
            />
          </div>
        </div>
        <div className="text-center mt-4">
          <button
            type="submit"
            className="btn text-primary ml-2 border-2 border-primary hover:bg-primary hover:text-white transition ease-out duration-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default RecipeInputs;
