import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/Login'
import SignUp from './components/SignUp'
import UserHome from './components/UserHome'
import SessionsAdapter from './adapters/SessionsAdapter'
import UsersAdapter from './adapters/UsersAdapter'
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

  componentDidMount() {
    SessionsAdapter.currentUser()
    .then( data => {
      this.setState({
        currentUser: data
      })
    })
  }


  loginUser = (user) => {
    return SessionsAdapter.loginUser(user)
    .then(userData => {
      localStorage.setItem('token', userData.jwt)
      this.setState({
        currentUser:userData
      })
    })
    .then( () => {
      this.context.router.history.push("/userhome")
    })
  }

  logOutUser = () => {
    localStorage.token = ""
    this.setState({currentUser: {}})
    this.context.router.history.push("/")
  }

  signUpUser = (user) => {
    UsersAdapter.signUpUser(user)
  }

  renderSignUp = () => {
    return <SignUp signUpUser={this.signUpUser} />
  }

  renderLogin = () => {
    return <Login loginUser={this.loginUser} />
  }

  renderUserHome = () => {
    return <UserHome currentUser={this.state.currentUser} logOutUser={this.logOutUser} />
  }

  render() {
    return (
      <div className="App">
        <Route exact path="/" render={this.renderLogin}/>
        <Route exact path="/signup" render={this.renderSignUp}/>
        <Route exact path="/userhome" render={this.renderUserHome}/>
      </div>
    );
  }
}

export default App;
