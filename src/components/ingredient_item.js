function IngredientItem({text, idx, removeItem}) {

    return (
        <span className="inline">
            <p className="ingredient-item">{text}</p>
            <button onClick={(e) => {
                removeItem(idx, e);
            }}>X</button>
        </span>
    )
}

export default IngredientItem;