import RenderRecipe from "./render_recipe";

function Thanks ({name, category, subcategory, totaltime, preptime, cooktime, ingredients, instructions}) {
    
    return (
        <div className='container'>
            <div className='jumbotron'>
                <h1 className="display-4">Thank You!</h1>
                <p className='lead'>You time here will keep <b><i>{name !==""? name : "your recipe"}</i></b> alive.</p>
                <hr className='my-4' />
            </div>
            <RenderRecipe name={name} category={category} subcategory={subcategory} totaltime={totaltime} 
            preptime={preptime} cooktime={cooktime} ingredients={ingredients} instructions={instructions}/>
        </div>

        
    )
}

export default Thanks;