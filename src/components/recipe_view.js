import RenderRecipe from "./render_recipe";
import React, { useState, useEffect } from "react";
var Airtable = require("airtable");
var base = new Airtable({ apiKey: process.env.REACT_APP_API_KEY }).base(
  "app3Gf3GAi6tb6C0t"
);

let myrecipes = [];
base("Recipes")
  .select({
    view: "Grid view",
  })
  .eachPage(
    function page(records, fetchNextPage) {
      // This function (`page`) will get called for each page of records.

      records.forEach(function (record) {
        record.fields.Ingredients = JSON.parse(record.fields.Ingredients);
        record.fields.Instructions = JSON.parse(record.fields.Instructions);
        debugger;
        myrecipes.push(record.fields);
      });

      // To fetch the next page of records, call `fetchNextPage`.
      // If there are more records, `page` will get called again.
      // If there are no more records, `done` will get called.
      fetchNextPage();
    },
    function done(err) {
      if (err) {
        console.error(err);
        return;
      }
    }
  );

debugger;

const RecipeView = () => {
  return (
    <div className="container">
      <p className="heading-1">Recipe Book</p>
      {myrecipes.map((recipe) => (
        <RenderRecipe
          name={recipe.Name}
          category={recipe.Category}
          subcategory={recipe.Subcategory}
          totaltime={recipe.totalTime}
          preptime={recipe.prepTime}
          cooktime={recipe.cookTime}
          ingredients={recipe.Ingredients}
          instructions={recipe.Instructions}
        />
      ))}
    </div>
  );
};

export default RecipeView;
