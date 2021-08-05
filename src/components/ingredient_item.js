function IngredientItem({text, idx, removeItem}) {

    return (
        <div class="input-group mb-3">
            <p  class="form-control">{text}</p>
        
            <div class="input-group-append">
                <button class="input-group-text btn btn-outline-secondary" 
                id="basic-addon2" 
                onClick={(e) => {removeItem(idx, e);}}> X </button>
            </div>
        </div>
    )
}

export default IngredientItem;