import CategorySelect from "./category_select";
import NextButton from "./next_button";
import {useLocation} from "react-router-dom";

function Category () {

    const location = useLocation()
    const data = location.state;

    debugger;

    let categorySelected = "";

    function selectChange (e) {
        console.log(e.target.text);
        categorySelected = e.target.text;
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