import React, { Component } from 'react';
import Home from './home.js';
import Profile from './profile.js';
import ReactDOM from 'react-dom';
// import Add from './Add.js';
import { BrowserRouter as Router, Link, NavLink, Redirect } from 'react-router-dom';
import Route from 'react-router-dom/Route';


class App extends Component {
    render() {
        return (
            <Router>
              <div className="App">                
                 
                  <Route path = "/" exact component = {Home} /> 
                     <Route path = "/Comment/:id" exact component = {Comment} />        
                  
              </div>
            </Router>
        );
    }
}

export default App;