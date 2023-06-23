import React from "react";

const About = () => {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-start items-center p-5 text-center mt-10">
      <h1 className="text-5xl  uppercase font-bold">
        About Our Website
      </h1>
      <p className="max-w-xl  mt-8">
        It does not matter if you are single or a family of 5, finding various recipes that are different every day is hard. 
        Whether it changing eating habits to be healthy, wanting to switch it up for the family or just trying something new, knowing what to make and how to make it can be a challenge. 
        On top of that, trying to break down the nutritional value of the food within the recipes is time consuming.
        <br /><br />
        How App Solves the Problem: This will take all the guessing work out and provide delicious meal recipes based on a food type you select and how many calories each recipe has to make sure you can apply it to any goal you may have, or just for the knowledge.
        This app can be used for anyone who eats.
      </p>
    </section>
  );
};

export default About;

