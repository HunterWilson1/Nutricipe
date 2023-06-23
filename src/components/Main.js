import React, { useState } from "react";
import pic from "../assets/food.jpeg";
import Card from "./Card";

const Main = () => {
  const [searchQuery, setSearchQuery] = useState(""); // State to track the search query
  const [data, setData] = useState([]); // State to store the fetched recipe data
  const recApiId = "965f718b"; // Your API ID
  const recApiKey = "b66c48f1da5cbf78d437f8b08aa18632"; // Your API Key

  const handleSearch = () => {
    fetchRecipe(searchQuery);
  };

  const fetchRecipe = async (query) => {
    try {
      const response = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=${recApiId}&app_key=${recApiKey}`
      );
      const recipeData = await response.json();
      setData(recipeData.hits); // Save the fetched recipe data to the state
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  return (
    <section>
      <div className="h-96 sm:h-128">
        <img
          src={pic}
          alt="Your Image"
          className="w-screen h-full object-cover"
        />
      </div>
      <div className="flex flex-col items-center mt-8">
        <div className="relative w-96">
          <input
            type="text"
            placeholder="Search for a recipe!"
            className="w-full px-4 py-2 rounded-lg border-2 border-gray-400 focus:outline-none focus:border-emerald-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <button
          onClick={handleSearch}
          className="mt-4 px-4 py-2 bg-emerald-500 text-white font-medium rounded-lg hover:bg-emerald-600 focus:outline-none"
        >
          Search
        </button>
      </div>
      {data.length > 0 && <Card data={data} />}
    </section>
  );
};

export default Main;
