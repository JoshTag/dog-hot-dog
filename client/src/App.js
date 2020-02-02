import React from "react";
import Main from "./pages/main";
import Landing from "./pages/Landing";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/play" component={Main} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
