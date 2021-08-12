import IngredientList from "./ingredient_list";
import { useState } from "react";
import IngredientItem from "./ingredient_item";
import StepNumber from "./step_number";

function Instructions({ handleChange, ingredients, instructions }) {
  const [instruction, setInstruction] = useState("");

  function onValueChange(e) {
    setInstruction(e.target.value);
  }

  function enterKey(e) {
    if (e.key === "Enter") {
      addInstruction(e);
    }
  }

  function addInstruction(e) {
    if (instruction === "") {
      return;
    }
    let newInstructions = instructions.concat([instruction]);
    setInstruction("");
    handleChange({ key: "instructions", value: newInstructions });
    document.getElementById("instruction-input").focus();
  }

  function removeItem(idx, e) {
    instructions.splice(idx, 1);
    handleChange({ key: "instructions", value: instructions });
  }

  return (
    <div className="container-fluid">
      <div className="row my-2">
        <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
          <h2>Instructions</h2>
        </div>
        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
          <StepNumber number="Last Step" className="ml-4" />
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-sm-12 col-md-8">
          <div className="row">
            <input
              type="text"
              id="instruction-input"
              className="form-control large-input"
              onChange={onValueChange}
              value={instruction}
              maxLength="500"
              onKeyDown={enterKey}
              placeholder='Type out instructions and click "Add Instruction" for each step...'
            />
          </div>
          <div className="container row text-center ">
            <button className="btn btn-secondary m-3" onClick={addInstruction}>
              Add Instruction
            </button>
          </div>
        </div>
        <div className="col-sm-12 col-md-4 p-4">
          {ingredients.length > 0 ? (
            <IngredientList ingredients={ingredients} />
          ) : (
            <p>You still haven't added ingredients 😭</p>
          )}
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col">
            <p className="h4">Your Instructions</p>
            <hr />
            {instructions.length > 0 ? (
              <ol>
                {instructions.map((instruc, idx) => (
                  <li key={idx}>
                    <IngredientItem
                      text={instruc}
                      idx={idx}
                      removeItem={removeItem}
                    />
                  </li>
                ))}
              </ol>
            ) : (
              <p>How can I make this recipe with no ingredients? 👩‍🍳</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Instructions;
