import React from "react";
import Main from "./pages/main";
import Landing from "./pages/Landing";
import Highscore from "./pages/Highscore";
import ErrorPage from "./pages/ErrorPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

import * as firebase from 'firebase';
require("dotenv").config();


class App extends React.Component {

  state = {
    highscore: null
  }

  app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
  })
  
  database = this.app.database().ref()
  
  componentDidMount() {
    this.database.on('value', snap => {
      this.setState({
        highscore: snap.val()
      })
    })
  }

  render () {
    console.log(this.state.highscore)
    console.log(process.env.REACT_APP_API_KEY)
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/play" component={Main} />
          <Route path="/highscore" render={(props) => <Highscore {...props} highscore={this.state.highscore}/>} />
          <Route path="" component={ErrorPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
