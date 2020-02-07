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
  })
  
  database = this.app.database().ref()
  
  componentDidMount() {
    this.database.on('value', snap => {
      const sortedData = Object.values(snap.val()).sort((a, b) => {
        return a["score"] - b["score"] || b["time"] - a["time"];
      });
      this.setState({
        highscore: sortedData.reverse()
      })
    })
  }

  newPost = (event, time, score, props) => {
    event.preventDefault()
    const name = event.target.firstName.value

    // Get a key for a new Post.
    var newPostKey = firebase.database().ref().push().key;

     // A post entry.
    var postData = {
      id: newPostKey,
      name: name,
      score: score,
      time: time
    };
  
    // Write the new post's data simultaneously in the posts list and the user's post list.
    var updates = {};
    updates['/' + newPostKey] = postData;
    // updates['/user-posts/' + uid + '/' + newPostKey] = postData;
  
    props.history.push('/highscore')
    return firebase.database().ref().update(updates);

  }

  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/play" render={(props) => <Main {...props} newPost={this.newPost}/>} />
          <Route path="/highscore" render={(props) => <Highscore {...props} highscore={this.state.highscore}/>} />
          <Route path="" component={ErrorPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
