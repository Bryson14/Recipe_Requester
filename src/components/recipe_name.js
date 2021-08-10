import StepNumber from './step_number';


function RecipeName ({handleChange, name, nextStep}) {

    function enterKey(e) {
        if (e.key === 'Enter') {
            nextStep();
        }
    }
    
    return (
        <div>
            <div className="vert-split-div">
                <h3 className="span-left">What is the name of your recipe?</h3>
                <p className="span-left">Something clever like <b><i>Grandma's Killer Cinnamon Orange Rolls</i></b> sounds better than just <b><i>Cinnamon Rolls</i></b>.</p>
                <div className="span-right">
                    <span>
                        <StepNumber number="01" />
                    <input type="text" 
                        className="form-control"
                        value={name} 
                        onChange={handleChange('name')} 
                        maxLength="100" 
                        onKeyDown={enterKey}
                        autoFocus
                        placeholder="Recipe Name"></input>
                    </span>
                </div>
            </div>
            <br />
            
        </div>
        
    )
}

export default RecipeName;