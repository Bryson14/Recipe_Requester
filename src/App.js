import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserStepform from "./components/user_step_form";
import RecipeView from "./components/recipe_view";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/recipes">
          <RecipeView />
        </Route>
        <Route exact path={["/", "Recipe_Requester"]}>
          <div className="user-form">
            <UserStepform />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}
