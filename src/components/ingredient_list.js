function IngredientList({ingredients}) {

    return (
        <div>
            <nav>        
                <ul>                
                    {ingredients.map((ingre, idx) => 
                        <li key={ingre.key}>{ingre}</li>)}
                </ul>
            </nav>
        </div>
        

    )
}

export default IngredientList;