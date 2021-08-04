function Category ({handleChange, category}) {

    

    let categories = ["Meat", "Soup", "Appetizer", "Dessert"];

    let itemsSelect = categories.length > 0 && 
    categories.map((item, i) => {
      return (
        <option key={i} value={item}>{item}</option>
      )
    }, this);
    
    return (
        <div>
          <h1 className="page-title">Category</h1>
           <select onChange={handleChange("category")} value={category} className="category-select">
              <option disabled selected value="notselected"> -- select an option -- </option>
              {itemsSelect}
            </select>
        </div>
    )
}

export default Category;