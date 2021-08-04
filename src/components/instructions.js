import IngredientList from "./ingredient_list";
import {useState} from "react";
var Airtable = require('airtable');
var base = new Airtable({apiKey: process.env.REACT_APP_API_KEY}).base('app3Gf3GAi6tb6C0t');

function Instructions ({handleChange, ingredients, instructions}) {

    const [instruction, setInstruction] = useState("");

    function onValueChange(e) {
        setInstruction(e.target.value);
    };

    function addInstruction(e) {
        if (instruction === "") {
            return;
        }
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
            maxLength="500"
            placeholder='Type out instructions and click button to add the steps!'/>

            <button onClick={addInstruction}>Add this instruction!</button>

            <ol>
                {instructions.map((instruc, idx) => 
                    <li className='text-wrap' key={instruc.key}>{instruc}</li>)}
            </ol>
        </div>
    )
}

export default Instructions;