import {useState} from "react";
import IngredientItem from './ingredient_item'

function Ingredients ({handleChange, ingredients}) {

    const [ingredient, setIngredient] = useState("");

    function onValueChange(e) {
        setIngredient(e.target.value);
        console.log(ingredient);
    };

    function addIngredient(e) {
        let newIngredients = [ingredient].concat(ingredients);
        setIngredient("");
        handleChange({key: 'ingredients', value: newIngredients});
        document.getElementById("ingredient-input").focus();
    }

    function removeItem(idx, e) {
        ingredients.splice(idx, 1);
        handleChange({key: 'ingredients', value: ingredients});
    }
    
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
                onKeyDown={e => e.key === 'Enter' && addIngredient}
            />
            <button onClick={addIngredient}>Add Ingredient</button>
            <hr />
            <ol>
                {ingredients.map((ingre, idx) => 
                    <li key={ingre.key}><IngredientItem text={ingre} idx={idx} removeItem={removeItem}/></li>)}
            </ol>
        </div>
    )
}

export default Ingredients;