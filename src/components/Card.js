import React from "react";

const RecipeList = ({ data }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
      {data.map((recipe, index) => (
        <div
          key={index}
          className="recipe-card bg-emerald-500 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300"
        >
          <img src={recipe.recipe.image} alt={recipe.recipe.label} className="object-cover h-40 sm:h-64 w-full" />
          <div className="p-4">
            <h2 className="text-xl font-semibold text-white">{recipe.recipe.label}</h2>
            <p className="text-gray-200 mt-2">Calories: {Math.round(recipe.recipe.calories)}</p>
            <p className="text-gray-200">Diet Label: {recipe.recipe.dietLabels.join(", ")}</p>
            <p className="text-gray-200">Cautions: {recipe.recipe.cautions.join(", ")}</p>
            <a
              href={recipe.recipe.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 mt-4 inline-block hover:underline"
            >
              View Recipe
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;




