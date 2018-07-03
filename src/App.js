import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Home from './Components/Home'
import ContactForm from './Components/ContactForm'
import store from './store.js'
import {Provider} from 'react-redux';


class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/contactform" component={ContactForm} />
            <Route path="/login" component={ContactForm} />
            <Route path="/administration" component={ContactForm} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
