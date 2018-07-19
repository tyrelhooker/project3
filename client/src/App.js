import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from "./pages/Main";
import Recipes from "./pages/Recipes";
import MyPantry from "./pages/MyPantry";
import GroceryList from "./pages/GroceryList";


const App = () => (
  <Router>
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/Recipes" component={Recipes} />
        <Route exact path="/MyPantry" component={MyPantry} />
        <Route exact path="/GroceryList" component={GroceryList} />
      </Switch>
    </div>
  </Router>
);

export default App;
