function IngredientList({ingredients}) {

    return (
        <div className='ingredient-list'>
            <nav className='ingredient-list'>  
                <h3>Ingredients</h3>      
                <ul>                
                    {ingredients.map((ingre, idx) => 
                        <li key={ingre.key}>{ingre}</li>)}
                </ul>
            </nav>
        </div>
    )
}

export default IngredientList;