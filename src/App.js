import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/Login'
import SessionsAdapter from './adapters/SessionsAdapter'
import './App.css';
import PropTypes from 'prop-types'

class App extends Component {

  static contextTypes = {
    router: PropTypes.object
  }

  constructor(){
    super()
    this.state = {
      currentUser: {}
    }
  }

  loginUser = (user) => {
    return SessionsAdapter.loginUser(user)
    .then(userData => {
      this.setState({
        currentUser:userData
      })
    })
    .then( () => {
      this.context.router.history.push("/userhome")
    })
  }

  renderLogin = () => {
    return <Login loginUser={this.loginUser} />
  }



  render() {
    return (
      <div className="App">
        <Route exact path="/" render={this.renderLogin}/>
        <Route exact path="/signup" render={this.renderSignUp}/>
      </div>
    );
  }
}

export default App;
