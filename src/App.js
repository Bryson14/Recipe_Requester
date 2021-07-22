import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Welcome from "./components/welcome";
import RecipeName from "./components/recipe_name";
import Category from "./components/category";
import Subcategory from "./components/sub_category";
import Ingredients from "./components/ingredients";
import Instructions from "./components/instructions";
import Thanks from "./components/thanks";
import Time from "./components/time";

export default function App() {
  return (
    <Router>
      <div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Welcome requester="Bryson"/>
          </Route>
          <Route path="/recipe-name">
            <RecipeName />
          </Route>
          <Route path="/category">
            <Category />
          </Route>
          <Route path="/subcategory">
            <Subcategory />
          </Route>
          <Route path="/time">
            <Time />
          </Route>
          <Route path="/ingredients">
            <Ingredients />
          </Route>
          <Route path="/instructions">
            <Instructions />
          </Route>
          <Route path="/thankyou">
            <Thanks />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function Users() {
  return <h2>Users</h2>;
}