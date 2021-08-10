function Subcategory({ handleChange, category, subcategory }) {
  let subcategories;

  switch (category) {
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

  let itemsSelect =
    subcategories.length > 0 &&
    subcategories.map((item, i) => {
      return (
        <option key={i} value={item}>
          {item}
        </option>
      );
    }, this);

  return (
    <div>
      <h1 className="page-title">Sub Category</h1>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <label class="input-group-text" for="inputGroupSelect01">
            Options
          </label>
        </div>
        <select
          onChange={handleChange("subCategory")}
          value={subcategory}
          class="custom-select"
          id="inputGroupSelect01"
        >
          <option selected>Choose...</option>
          {itemsSelect}
        </select>
      </div>
    </div>
  );
}

export default Subcategory;
