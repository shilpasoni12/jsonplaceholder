import React, { Component } from 'react';
import Home from './home.js';
import Profile from './profile.js';
import ReactDOM from 'react-dom';
// import Add from './Add.js';
import Comment from './comments.js';
import { BrowserRouter as Router, Link, NavLink, Redirect } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import update from './update.js';
import newPost from './newpost';


class App extends Component {
    render() {
        return (
            <Router>
              <div className="App">                
                 
                     <Route path = "/" exact component = {Home} /> 
                     <Route path = "/Comment/:id" exact component = {Comment} />    
                      <Route path = "/Update/:id" exact component = {update} />    
                      <Route path = "/newpost/" exact component = {newPost} />    

                  
              </div>
            </Router>
        );
    }
}

export default App;