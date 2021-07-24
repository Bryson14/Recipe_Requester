import CategorySelect from "../category_select";
import NextButton from "./next_button";

function Category () {

    let categorySelected = "";

    function selectChange (event) {
        debugger;
        categorySelected = event.target.text;
    }

    let categories = ["Meat", "Soup", "Appetizer", "Dessert"];
    
    return (
        <div>
            Category
            <CategorySelect items={categories} onChangeFunc={selectChange} />
            <NextButton url="/subcategory" text="Next" state={categorySelected} />
        </div>
    )
}

export default Category;