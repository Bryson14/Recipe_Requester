const RenderRecipe = ({name, category, subcategory, totaltime, preptime, cooktime, ingredients, instructions}) => {

    debugger;

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;

    return (

        <div className="container">
            <div className="row">
            <h2 className='header-2'>{name}</h2>
                <div className="col-lg-6 col-md-12">
                    <p>Category: <b>{category}</b> -- Subcategory: <b>{subcategory}</b></p>
                    <p>Time: <b>{totaltime} min.</b></p>
                    <p>Prep Time: <b>{preptime} min.</b></p>
                    <p>Cook Time: <b>{cooktime} min.</b></p>
                </div>
                <div className="col-lg-6 col-md-12">
                    <h4>Ingredients</h4>
                        <ol>
                            {ingredients.map((ingre, idx) => 
                                <li key={idx}>{ingre}</li>)}
                        </ol>

                    <h4>Instructions</h4>
                        <ol>
                            {instructions.map((instruc, idx) => 
                                <li key={idx}>{instruc}</li>)}
                        </ol>
                </div>
            </div>
            
            <hr className='my-4'/>
            <p className='lead'>Thank you for you recipe! Created {today}</p>
        </div>
    )
}

export default RenderRecipe;