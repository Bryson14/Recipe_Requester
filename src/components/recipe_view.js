import RenderRecipe from "./render_recipe";
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

const RecipeView = () => {
  return (
    <div className="container">
      <h1 className="m-3 ">Recipe Book</h1>
      <p className="text-muted">
        For now, use <kbd>Cmd+f</kbd> or <kbd>Ctrl+f</kbd> to find a recipe.
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
