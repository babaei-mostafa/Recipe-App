import { createContext, useReducer, useState } from "react";

const initialRecipes = [
  {
    title: "Bean Chill Stew",
    des: "slkfjksjfkfkskfj",
    img: "img/stew.jpg",
    author: "mario",
    time: 25,
    id: 1,
  },
  {
    title: "Veg Noodles",
    des: "slkfjksjfkfkskfj",
    img: "img/noodles.jpg",
    author: "luigi",
    time: 18,
    id: 2,
  },
  {
    title: "Curry",
    des: "slkfjksjfkfkskfj",
    img: "img/curry.jpg",
    author: "locus",
    time: 20,
    id: 3,
  },
];

export const ACTIONS = {
  ADD_RECIPE: "add-recipe",
  DELETE_RECIPE: "delete-recipe",
};

const recipeReducer = (recipes, action) => {
  switch (action.type) {
    case ACTIONS.ADD_RECIPE:
      return [
        ...recipes,
        newRecipe(
          action.payload.title,
          action.payload.des,
          action.payload.author,
          action.payload.time,
          action.payload.img
        ),
      ];
    case ACTIONS.DELETE_RECIPE:
      return recipes.filter((recipe) => recipe.id !== action.payload.id);
    default:
      return recipes;
  }
};

const newRecipe = (title, des, author, time, url) => {
  return {
    title: title,
    des: des,
    img: url,
    author: author,
    time: time,
    id: Date.now(),
  };
};

export const RecipeContext = createContext(null);

export const RecipeContextProvider = ({ children }) => {
  const [title, setTitle] = useState("");
  const [des, setDes] = useState("");
  const [author, setAuthor] = useState("");
  const [time, setTime] = useState(5);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [recipes, dispatch] = useReducer(recipeReducer, initialRecipes);

  return (
    <RecipeContext.Provider
      value={{
        title,
        setTitle,
        des,
        setDes,
        author,
        setAuthor,
        time,
        setTime,
        selectedImage,
        setSelectedImage,
        imageUrl,
        setImageUrl,
        recipes,
        dispatch,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};
