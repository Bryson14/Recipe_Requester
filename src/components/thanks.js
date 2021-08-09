import RenderRecipe from "./render_recipe";

function Thanks ({state}) {
    debugger;
    
    return (
        <div>
            <h1 className="page-title">Thank You!</h1>
            <p>You time here will keep <b><i>{state.name !==""? state.name : "your recipe"}</i></b> alive.</p>
            <RenderRecipe state={state}/>
        </div>

        
    )
}

export default Thanks;