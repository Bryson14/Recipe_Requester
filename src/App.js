import React from "react";
import UserStepform from "./components/user_step_form"

console.log("TEST");
console.log(process.env.REACT_APP_API_KEY);

export default function App() {
  return (
    <div  className="user-form">
       <UserStepform /> 
    </div>
    
  );
}
