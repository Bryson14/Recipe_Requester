const RenderRecipe = ({state}) => {

    debugger;
    let name = state.name;
    let category = state.category;
    let subCategory = state.SubCategory;
    let totalTime = state.totalTime;
    let prepTime = state.prepTime;
    let cookTime = state.cookTime;
    let ingredients = state.ingredients;
    let instructions = state.instructions;

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;

    return (

        <div>
            <h2>{name}</h2>
            <p>Category: <b>{category}</b></p>
            <p>Subcategory: <b>{subCategory}</b></p>
            <p>Time: <b>{totalTime}</b></p>
            <p>Prep Time: <b>{prepTime}</b></p>
            <p>Cook Time: <b>{cookTime}</b></p>

            <h3>Ingredients</h3>
            <ol>
                {ingredients.map((ingre, idx) => 
                    <li key={idx}>{ingre}</li>)}
            </ol>

            <h3>Instructions</h3>
            <ol>
                {instructions.map((instruc, idx) => 
                    <li key={idx}>{instruc}</li>)}
            </ol>

            <p>Thank you for you recipe! Created {today}</p>
        </div>
    )
}

export default RenderRecipe;