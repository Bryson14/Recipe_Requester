import React, {Component} from 'react';
import Welcome from "./welcome";
import RecipeName from "./recipe_name";
import NextButton from './next_button';

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

    render() {
        const {step} = this.state;
        const {name, category, subCategory, prepTime, cooktime, totalTime, ingredients, instructions, requester} =  this.state;

        switch(step) {
        case 1: 
        return (
            <>
                <Welcome requester={requester}/>
                <NextButton func={this.nextStep} text="NEXT" />
            </>
        )
        case 2: 
        return (
            <>
                <RecipeName requester={requester}/>
                <NextButton func={this.nextStep} text="NEXT" />
            </>
        )
        case 3: 
        return (
            <div>
                Step 3
            </div>
        )
        case 4: 
        return (
            <div>
                Step 4
            </div>
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