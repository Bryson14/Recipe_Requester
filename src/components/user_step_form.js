import React, {Component} from 'react';
import Welcome from "./welcome";
import RecipeName from "./recipe_name";
import Category from "./category";
import Subcategory from './sub_category';
import ControlButton from './control_button';
import Time from './time';
import Ingredients from './ingredients';
import Instructions from './instructions';
import Thanks from './thanks';

export class UserStepForm extends Component {

    state = {
        step: 1,
        name: "",
        category: "",
        subCategory: "",
        prepTime: 0,
        cooktime: 0,
        totalTime: 0,
        ingredients: [],
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

        console.log(`Name:${this.state.name}\nCategory:${this.state.category}
        \nSubCat:${this.state.subcategory}\ntime:${this.state.totalTime}
        \ningredients:${this.state.ingredients}\nsteps:${this.state.steps}\nInstructions:${this.state.instructions}`);
    };

    // a more complicated state set where to logic is in ingredients.js and instructions.js
    complexSetState = props => {
        this.setState({ [props.key]: props.value});
    } 

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
                <RecipeName handleChange={this.handleChange} name={name} nextStep={this.nextStep}/>
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
                <Time  handleChange={this.handleChange} time={totalTime} nextStep={this.nextStep}/>
                <ControlButton func={this.prevStep} text="Back" />
                <ControlButton func={this.nextStep} text="Next" />
            </>
        ) 
        case 6: 
        return (
            <>
                <Ingredients  handleChange={this.complexSetState} ingredients={ingredients} nextStep={this.nextStep} prevStep={this.prevStep}/>
            </>
        ) 
        case 7: 
        return (
            <>
                <Instructions  handleChange={this.complexSetState} ingredients={ingredients} instructions={instructions}/>
                <ControlButton func={this.prevStep} text="Back" />
                <button className="finish-button" onClick={this.nextStep} >Finish</button>
            </>
        ) 
        case 8: 
        return (
            <>
                <Thanks name={name}/>
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