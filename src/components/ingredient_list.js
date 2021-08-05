function IngredientList({ingredients}) {

    return (

            <div class="panel panel-primary" id="result_panel">
            <div class="panel-heading">
                <h3 class="panel-title">Your Ingredients</h3>
            </div>
            <div class="panel-body">
                <ul class="list-group">
                    {ingredients.map((ingre, idx) => 
                            <li key={idx} className="list-group-item">{ingre}</li>)}
                </ul>
            </div>
            </div>
    )
}

export default IngredientList;