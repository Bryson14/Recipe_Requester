import {useState} from "react";
import IngredientItem from './ingredient_item'
import ControlButton from "./control_button";

function Ingredients ({handleChange, ingredients, nextStep, prevStep}) {

    const [ingredient, setIngredient] = useState("");

    function enterKey(e) {
        if (e.key === 'Enter') {
            addIngredient(e);
        }
    }

    function onValueChange(e) {
        setIngredient(e.target.value);
    };

    function addIngredient(e) {
        if (ingredient === "") {
            return;
        }
        let newIngredients = [ingredient].concat(ingredients);
        setIngredient("");
        handleChange({key: 'ingredients', value: newIngredients});
        document.getElementById("ingredient-input").focus();
    };

    function removeItem(idx, e) {
        ingredients.splice(idx, 1);
        handleChange({key: 'ingredients', value: ingredients});
    };
    
    return (
        <div>
            <h1 className="page-title">Ingredients</h1>
            <input 
                type="text"
                id="ingredient-input"
                value={ingredient}
                onChange={onValueChange}
                autoFocus
                placeholder='Type an Ingredient'
                onKeyDown={enterKey}
            />
            <button onClick={addIngredient}>Add Ingredient</button>
            <ControlButton func={prevStep} text="Back" />
            <ControlButton func={nextStep} text="Next" />
            <hr />
            <ol>
                {ingredients.map((ingre, idx) => 
                    <li key={ingre.key}><IngredientItem text={ingre} idx={idx} removeItem={removeItem}/></li>)}
            </ol>
        </div>
    )
}

export default Ingredients;