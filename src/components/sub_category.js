import NextButton from "./next_button";
import CategorySelect from "../category_select";
import {useLocation} from "react-router-dom";

function Subcategory (category) {

    const location = useLocation()
    const { data } = location.state;

    if (data != null) {
        category = data;
    }
    debugger;

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

    // todo get category from url or state?
    
    return (
        <div>
            Sub-Category
            <CategorySelect items={subcategories} />
            <NextButton url="/time" text="Next" />
        </div>
    )
}

export default Subcategory;