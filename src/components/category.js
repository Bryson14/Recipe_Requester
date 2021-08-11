function Category({ handleChange, category }) {
  let categories = [
    "Breakfast",
    "Lunch",
    "Beverages",
    "Appetizers",
    "Soups",
    "Salads",
    "Main dishes: Beef",
    "Main dishes: Poultry",
    "Main dishes: Pork",
    "Main dishes: Seafood",
    "Main dishes: Vegetarian",
    "Side dishes: Vegetables",
    "Side dishes: Other",
    "Desserts",
    "Canning / Freezing",
    "Breads",
    "Holidays",
    "Entertaining",
  ];

  let itemsSelect =
    categories.length > 0 &&
    categories.map((item, i) => {
      return (
        <option key={i} value={item}>
          {item}
        </option>
      );
    }, this);

  return (
    <div>
      <h1 className="page-title">Category</h1>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <label class="input-group-text" for="inputGroupSelect01">
            Options
          </label>
        </div>
        <select
          onChange={handleChange("category")}
          value={category}
          className="form-control"
          id="inputGroupSelect01"
        >
          <option selected>Choose...</option>
          {itemsSelect}
        </select>
      </div>
    </div>
  );
}

export default Category;
