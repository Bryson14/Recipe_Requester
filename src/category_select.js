function CategorySelect(items) {
    
    let itemsSelect = items.items.length > 0 && 
    items.items.map((item, i) => {
      return (
        <option key={i} value={item.id}>{item.name}</option>
      )
    }, this);
    debugger;
    return (
        <select>
            {itemsSelect}
        </select>
    )
}

export default CategorySelect;