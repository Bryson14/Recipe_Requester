import IngredientList from "./ingredient_list";
import {useState} from "react";
import IngredientItem from "./ingredient_item";

function Instructions ({handleChange, ingredients, instructions}) {

    const [instruction, setInstruction] = useState("");

    function onValueChange(e) {
        setInstruction(e.target.value);
    };

    function addInstruction(e) {
        if (instruction === "") {
            return;
        }
        let newInstructions = instructions.concat([instruction]);
        setInstruction("");
        handleChange({key: 'instructions', value: newInstructions});
        document.getElementById("instruction-input").focus();
    };

    function removeItem(idx, e) {
        instructions.splice(idx, 1);
        handleChange({key: 'instructions', value: instructions});
    };
    
    return (
        
        <div className="container text-center">
            <h1 className="page-title">Instructions</h1>
            <hr />
            <div className="row">
                <div className='col-sm-12 col-md-8'>

                    <div className="row">
                        <input
                        type="text" 
                        id='instruction-input'
                        className="form-control large-input"
                        onChange={onValueChange}
                        value={instruction} 
                        maxLength="500"
                        placeholder='Type out instructions and click "Add Instruction" for each step...'/>
                    </div>
                    <div className='container row text-center '>
                        <button className="btn btn-secondary m-3" onClick={addInstruction}>Add Instruction</button>
                    </div>
                </div>
                <div className='col-sm-12 col-md-4 p-4'>
                    {ingredients.length > 0 ?
                <IngredientList ingredients={ingredients} />
                :
                <p>You still haven't added ingredients 😭</p>
                    }
                </div>
            </div>
            
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                    <p className="h4">Your Instructions</p>
                    <hr />
                    {instructions.length > 0?
                        <ol>
                            {instructions.map((instruc, idx) => 
                                <li key={idx}><IngredientItem text={instruc} idx={idx} removeItem={removeItem}/></li>)}
                        </ol>
                        :
                            <p>How can I make this recipe with no ingredients? 👩‍🍳</p>
                            }
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Instructions;