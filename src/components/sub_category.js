function Subcategory ({handleChange, category, subcategory}) {

    let subcategories;

    switch(category) {
        case "Meat":
            subcategories = ["Chicken", "Pork", "Beef", "Seafood"];
            break;
        case "Soup":
            subcategories = ["Savory", "Light", "Creamy", "Broth"];
            break;
        case "Appetizer":
            subcategories = ["Fried", "Vegetable", "Restaurant Style"];
            break;
        case "Dessert":
            subcategories = ["Chocolate", "Fruit", "Other"];
            break;
        default:
            subcategories = ["Test Item", "Something"];
            break;

    }

    let itemsSelect = subcategories.length > 0 && 
    subcategories.map((item, i) => {
      return (
        <option key={i} value={item}>{item}</option>
      )
    }, this);
    
    return (
        <div>
            <h1 className="page-title">Sub Category</h1>
            <select onChange={handleChange("subcategory")} value={subcategory} className="category-select">
            <option disabled selected value> -- select an option -- </option>
            {itemsSelect}
            </select>
        </div>
    )
}

export default Subcategory;