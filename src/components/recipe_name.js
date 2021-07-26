import StepNumber from './step_number';


function RecipeName ({handleChange, name}) {
    
    return (
        <div>
            <div className="vert-split-div">
                <h3 className="span-left">What is the name of your recipe?</h3>
                <p className="span-left">Something clever like <i>Grandma's killer Cinnamon Orange Rolls</i> sounds better than just <i>Cinnamon Rolls</i>.</p>
                <div className="span-right">
                    <span>
                        <StepNumber number="01" />
                    <input type="text" 
                        value={name} 
                        onChange={handleChange('name')} 
                        maxLength="100" 
                        placeholder="Recipe Name"></input>
                    </span>
                </div>
            </div>
            <br />
            <div className="vert-split-div">
                <div className="span-right">
                
                </div>
            </div>
        </div>
        
    )
}

export default RecipeName;