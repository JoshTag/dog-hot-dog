import React from "react";
import Main from "./pages/main";
import Landing from "./pages/Landing";
import ErrorPage from "./pages/ErrorPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/play" component={Main} />
        <Route path="" component={ErrorPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
