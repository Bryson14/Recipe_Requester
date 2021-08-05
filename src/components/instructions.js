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
        
        <div className="container">
            <h1 className="page-title">Instructions</h1>
            <div className="row">
                <div className='col-sm-12 col-md-8'>
                    <textarea 
                    id='instruction-input'
                    className="form-control"
                    onChange={onValueChange}
                    value={instruction} 
                    rows='6'
                    cols='70'
                    maxLength="500"
                    placeholder='Type out instructions and click "Add Instruction" for each step...'/>
                </div>
                <div className='col-sm-12 col-md-4'>
                <IngredientList ingredients={ingredients} />
                </div>
            </div>
            
        
            <button className="btn btn-secondary btn-spacer" onClick={addInstruction}>Add Instruction</button>

            
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                    <p className="h4">My Instructions</p>
                    <hr />
                        <ol>
                            {instructions.map((instruc, idx) => 
                                <li className='form-control text-wrap' id="text-wrap" key={instruc.key}>{instruc}</li>)}
                        </ol>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Instructions;