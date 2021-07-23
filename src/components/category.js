import CategorySelect from "../category_select";
import NextButton from "./next_button";

function Category () {

    let categories = ["Meat", "Soup", "Appetizer", "Dessert"];
    
    return (
        <div>
            Category
            <CategorySelect items={categories} />
            <NextButton url="/subcategory" text="Next" />
        </div>
    )
}

export default Category;