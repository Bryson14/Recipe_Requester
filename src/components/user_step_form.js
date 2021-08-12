import React, { Component } from "react";
import Welcome from "./welcome";
import RecipeName from "./recipe_name";
import Category from "./category";
import ControlButton from "./control_button";
import Time from "./time";
import Ingredients from "./ingredients";
import Instructions from "./instructions";
import ModalConfim from "./modal_confirm";
import Thanks from "./thanks";
var Airtable = require("airtable");
var base = new Airtable({ apiKey: process.env.REACT_APP_API_KEY }).base(
  "app3Gf3GAi6tb6C0t"
);

export class UserStepForm extends Component {
  componentDidMount() {
    const params = new URLSearchParams(window.location.search);
    if (params.has("requester")) {
      this.setState({ requester: params.get("requester") });
    }
  }

  state = {
    step: 1,
    name: "",
    category: "",
    prepTime: "",
    cookTime: "",
    totalTime: "",
    ingredients: [],
    instructions: [],
    requester: "Bryson",
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  // Handle fields change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  // a more complicated state set where to logic is in ingredients.js and instructions.js
  complexSetState = (props) => {
    this.setState({ [props.key]: props.value });
  };

  createRecord = async () => {
    let self = this;
    base("Recipes").create(
      [
        {
          fields: {
            Name: this.state.name,
            Category: this.state.category,
            totalTime: Number(this.state.totalTime),
            prepTime: Number(this.state.prepTime),
            cookTime: Number(this.state.cookTime),
            Ingredients: JSON.stringify(this.state.ingredients.reverse()),
            Instructions: JSON.stringify(this.state.instructions),
          },
        },
      ],
      function (err, records) {
        if (err) {
          console.error(err);
          alert("There was a problem submitting the data to Airtable.");
          return;
        } else {
          records.forEach(function (record) {
            console.log(record.getId());
          });
          self.nextStep();
        }
      }
    );
  };

  render() {
    const { step } = this.state;
    const {
      name,
      category,
      prepTime,
      cookTime,
      totalTime,
      ingredients,
      instructions,
      requester,
    } = this.state;

    switch (step) {
      case 1:
        return (
          <>
            <Welcome requester={requester} nextStep={this.nextStep} />
          </>
        );
      case 2:
        return (
          <>
            <RecipeName
              handleChange={this.handleChange}
              name={name}
              nextStep={this.nextStep}
            />
            <ControlButton func={this.prevStep} text="Back" />
            <ControlButton func={this.nextStep} text="Next" />
          </>
        );
      case 3:
        return (
          <>
            <Category handleChange={this.handleChange} category={category} />
            <ControlButton func={this.prevStep} text="Back" />
            <ControlButton func={this.nextStep} text="Next" />
          </>
        );
      case 4:
        return (
          <>
            <Time
              handleChange={this.handleChange}
              time={totalTime}
              prepTime={prepTime}
              cookTime={cookTime}
              nextStep={this.nextStep}
              name={name}
            />
            <ControlButton func={this.prevStep} text="Back" />
            <ControlButton func={this.nextStep} text="Next" />
          </>
        );
      case 5:
        return (
          <>
            <Ingredients
              handleChange={this.complexSetState}
              ingredients={ingredients}
              nextStep={this.nextStep}
              prevStep={this.prevStep}
            />
          </>
        );
      case 6:
        return (
          <>
            <Instructions
              handleChange={this.complexSetState}
              ingredients={ingredients}
              instructions={instructions}
            />
            <ControlButton func={this.prevStep} text="Back" />
            <button className="btn btn-success" onClick={this.nextStep}>
              Finish
            </button>
          </>
        );
      case 7:
        return (
          <>
            <Instructions
              handleChange={this.complexSetState}
              ingredients={ingredients}
              instructions={instructions}
            />
            <ModalConfim
              prevStep={this.prevStep}
              submit_record={this.createRecord}
            />
          </>
        );
      case 8:
        return (
          <>
            <Thanks
              name={name}
              category={category}
              totaltime={totalTime}
              preptime={prepTime}
              cooktime={cookTime}
              ingredients={ingredients}
              instructions={instructions}
            />
          </>
        );
      default:
        return <div>Unknown Error</div>;
    }
  }
}

export default UserStepForm;
