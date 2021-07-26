function CategorySelect({items, onChangefunc}) {
    
    let itemsSelect = items.length > 0 && 
    items.map((item, i) => {
      return (
        <option key={i} value={item}>{item}</option>
      )
    }, this);

    return (
        <select onChange={onChangefunc} className="category-select">
            <option disabled selected value> -- select an option -- </option>
            {itemsSelect}
        </select>
    )
}

export default CategorySelect;