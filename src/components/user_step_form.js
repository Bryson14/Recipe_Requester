import React, {Component} from 'react';
import Welcome from "./welcome";
import RecipeName from "./recipe_name";
import Category from "./category";
import Subcategory from './sub_category';
import ControlButton from './control_button';
import Time from './time';
import Ingredients from './ingredients';
import instructions from './instructions';
import Thanks from './thanks';
import Instructions from './instructions';

export class UserStepForm extends Component {

    state = {
        step: 1,
        name: "",
        category: "",
        subCategory: "",
        prepTime: 0,
        cooktime: 0,
        totalTime: 0,
        ingredients: [""],
        instructions: [],
        requester: "Bryson"
    }

    nextStep = () => {
        const {step} = this.state;
        this.setState({
            step: step + 1
        })
    }

    prevStep = () => {
        const {step} = this.state;
        this.setState({
            step: step - 1
        })
    }

        // Handle fields change
    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
        console.log(`State\nName:${this.state.name}\nCategory:${this.state.category}\nSubCat:${this.state.subcategory}\ntime:${this.state.totalTime}`);
    };

    render() {
        const {step} = this.state;
        const {name, category, subCategory, prepTime, cooktime, totalTime, ingredients, instructions, requester} =  this.state;

        switch(step) {
        case 1: 
        return (
            <>
                <Welcome requester={requester} nextStep={this.nextStep}/>
            </>
        )
        case 2: 
        return (
            <>
                <RecipeName requester={requester} handleChange={this.handleChange} name={name}/>
                <ControlButton func={this.prevStep} text="Back" />
                <ControlButton func={this.nextStep} text="Next" />
            </>
        )
        case 3: 
        return (
            <>
                <Category  handleChange={this.handleChange} category={category}/>
                <ControlButton func={this.prevStep} text="Back" />
                <ControlButton func={this.nextStep} text="Next" />
            </>
        )
        case 4: 
        return (
            <>
                <Subcategory  handleChange={this.handleChange} subcategory={subCategory} category={category} s/>
                <ControlButton func={this.prevStep} text="Back" />
                <ControlButton func={this.nextStep} text="Next" />
            </>
        )
        case 5: 
        return (
            <>
                <Time  handleChange={this.handleChange} time={totalTime}/>
                <ControlButton func={this.prevStep} text="Back" />
                <ControlButton func={this.nextStep} text="Next" />
            </>
        ) 
        case 6: 
        return (
            <>
                <Ingredients  handleChange={this.handleChange} ingredients={ingredients} />
                <ControlButton func={this.prevStep} text="Back" />
                <ControlButton func={this.nextStep} text="Next" />
            </>
        ) 
        case 7: 
        return (
            <>
                <Instructions  handleChange={this.handleChange} ingredients={ingredients} instructions={instructions}/>
                <ControlButton func={this.prevStep} text="Back" />
                <ControlButton func={this.nextStep} text="Next" />
            </>
        ) 
        case 8: 
        return (
            <>
                <Thanks />
                <ControlButton func={this.prevStep} text="Back" />
            </>
        )  
        default:
            return (
                <div>
                    Unknown Error
                </div>
            )
        }
    }
}

export default UserStepForm;