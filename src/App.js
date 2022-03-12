import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Navigation from "./components/Navigation";
import Detail from "./routes/Detail";
import "./App.css";

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path = "/about">
          <About/> 
        </Route>
        <Route exact path = "/movie/:id">
          <Detail />
        </Route>
        <Route exact path = "/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;