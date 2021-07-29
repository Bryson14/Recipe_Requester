import IngredientList from "./ingredient_list";
import {useState} from "react";

function Instructions ({instructions, ingredients, handleChange}) {

    const [instruction, setInstruction] = useState("");

    function onValueChange(e) {
        setInstruction(e.target.value);
    };

    function addInstruction(e) {
        debugger;
        let newInstructions = [instruction].concat(instructions);
        setInstruction("");
        handleChange({key: 'instructions', value: newInstructions});
        document.getElementById("instruction-input").focus();
    };

    function removeItem(idx, e) {
        instruction.splice(idx, 1);
        handleChange({key: 'instructions', value: instructions});
    };
    
    return (
        
        <div>
            <h1 className="page-title">Instructions</h1>
            <IngredientList ingredients={ingredients} />
            <textarea 
            id='instruction-input'
            onChange={onValueChange}
            value={instruction} 
            rows='6'
            cols='70'
            placeholder='Click on ingredients and type what do do with them!'/>

            <button onClick={addInstruction}>Add this instruction!</button>

            <ol>
                {instructions.map((instruc, idx) => 
                    <li key={instruc.key}>{instruc}</li>)}
            </ol>
        </div>
    )
}

export default Instructions;