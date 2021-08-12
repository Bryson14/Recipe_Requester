import StepNumber from "./step_number";

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
      <div className="container-fluid">
        <div className="row my-2">
          <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
            <h2>Category</h2>
          </div>
          <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
            <StepNumber number="Step 2 of 5" className="ml-4" />
          </div>
        </div>
      </div>
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
