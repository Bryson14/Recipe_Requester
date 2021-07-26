import React, {Component} from 'react';
import Welcome from "./welcome";
import RecipeName from "./recipe_name";
import ControlButton from './control_button';

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
        console.log(`State\n${this.state.name}`);
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
                <ControlButton func={this.nextStep} text="NEXT" />

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