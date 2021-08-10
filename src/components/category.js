function Category({ handleChange, category }) {
  let categories = ["Meat", "Soup", "Appetizer", "Dessert"];

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

export default Category;
