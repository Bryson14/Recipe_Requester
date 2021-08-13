import RenderRecipe from "./render_recipe";
import { useState } from "react";
var Airtable = require("airtable");
var base = new Airtable({ apiKey: process.env.REACT_APP_API_KEY }).base(
  "app3Gf3GAi6tb6C0t"
);

let all_recipes = [];
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
        all_recipes.push(record.fields);
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

const RecipeView = () => {
  const [myrecipes, setMyrecipes] = useState(all_recipes);
  // all recipes will save all fetched data so it doesn't have to reload and filter it to my_recipes

  function exists_and_includes(attr, text) {
    if (attr != null) {
      if (typeof attr === "string") {
        attr = attr.toLowerCase();
      }
      return attr.includes(text);
    }
    return false;
  }

  function handle_change(e) {
    let filtered_recipes = [];
    let text = e.target.value;
    if (text == null || text === "") {
      filtered_recipes = all_recipes;
    } else {
      text = text.toLowerCase();
      // leave as empty list
    }
    all_recipes.forEach((recipe) => {
      debugger;
      if (
        recipe !== null &&
        (exists_and_includes(recipe.Name, text) ||
          exists_and_includes(recipe.Category, text) ||
          exists_and_includes(recipe.Ingredients, text))
      ) {
        filtered_recipes.push(recipe);
      }
    });
    setMyrecipes(filtered_recipes);
  }

  return (
    <div className="container">
      <h1 className="m-3 ">Recipe Book</h1>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text">Search</span>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="Search titles or keywords"
          onChange={handle_change}
        />
      </div>
      <p className="text-muted">
        Or use <kbd>Cmd+f</kbd> or <kbd>Ctrl+f</kbd> to find a recipe.
      </p>
      <hr />
      {myrecipes.map((recipe) => (
        <RenderRecipe
          name={recipe.Name}
          category={recipe.Category}
          totaltime={recipe.totalTime}
          preptime={recipe.prepTime}
          cooktime={recipe.cookTime}
          ingredients={recipe.Ingredients}
          instructions={recipe.Instructions}
          recipeBook={true}
        />
      ))}
    </div>
  );
};

export default RecipeView;
