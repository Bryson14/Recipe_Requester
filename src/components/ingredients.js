import { useState } from "react";
import IngredientItem from "./ingredient_item";
import ControlButton from "./control_button";

function Ingredients({ handleChange, ingredients, nextStep, prevStep }) {
  const [ingredient, setIngredient] = useState("");

  function enterKey(e) {
    if (e.key === "Enter") {
      addIngredient(e);
    }
  }

  function onValueChange(e) {
    setIngredient(e.target.value);
  }

  function addIngredient(e) {
    if (ingredient === "") {
      return;
    }
    let newIngredients = [ingredient].concat(ingredients);
    setIngredient("");
    handleChange({ key: "ingredients", value: newIngredients });
    document.getElementById("ingredient-input").focus();
  }

  function removeItem(idx, e) {
    ingredients.splice(idx, 1);
    handleChange({ key: "ingredients", value: ingredients });
  }

  return (
    <div>
      <h1 className="page-title">Ingredients</h1>
      <p>
        Add the amount of the ingredient as well. For example, say "3 cups of
        unbleached flour"
      </p>

      <ControlButton func={prevStep} text="Back" />
      <ControlButton func={nextStep} text="Next" />
      <div>
        <small>
          Pressing <kbd>Enter</kbd> will auto add your ingredient!
        </small>
      </div>

      <hr />
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <button
            class="input-group-text btn btn-success m-2"
            onClick={addIngredient}
            id="basic-addon1"
          >
            Add Ingredient
          </button>
        </div>
        <input
          type="text"
          className="form-control"
          id="ingredient-input"
          value={ingredient}
          onChange={onValueChange}
          autoFocus
          placeholder="Type an Ingredient"
          onKeyDown={enterKey}
        />
      </div>

      {ingredients.length > 0 ? (
        <ol>
          {ingredients.map((ingre, idx) => (
            <li key={ingre.key}>
              <IngredientItem text={ingre} idx={idx} removeItem={removeItem} />
            </li>
          ))}
        </ol>
      ) : (
        <p>You have no ingredients. Add some!</p>
      )}
    </div>
  );
}

export default Ingredients;
