import RenderRecipe from "./render_recipe";
import { useHistory } from "react-router-dom";

function Thanks({
  name,
  category,
  totaltime,
  preptime,
  cooktime,
  ingredients,
  instructions,
}) {
  let history = useHistory();

  function goToRecipes(e) {
    history.push("/recipes");
  }

  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-4">Thank You!</h1>
        <p className="lead">
          You time here will keep{" "}
          <b>
            <i>{name !== "" ? name : "your recipe"}</i>
          </b>{" "}
          alive.
        </p>
        <p>Click here to see other recipes</p>
        <button className="btn btn-secondary" onClick={goToRecipes}>
          See Recipe Book!
        </button>
        <hr className="my-4" />
      </div>
      <RenderRecipe
        name={name}
        category={category}
        totaltime={totaltime}
        preptime={preptime}
        cooktime={cooktime}
        ingredients={ingredients}
        instructions={instructions}
        recipeBook={false}
      />
    </div>
  );
}

export default Thanks;
