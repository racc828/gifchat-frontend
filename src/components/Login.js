import React from 'react'
import { NavLink } from 'react-router-dom';

export default class Login extends React.Component {

  constructor() {
    super()
    this.state = {
      username: "",
      password: ""
    }
  }

  handleChange = (e) => {
    let property = e.target.name
    let value = e.target.value
    this.setState({
      [property]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let user = this.state
    this.props.loginUser(user)
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <h2> Login </h2>
          <input onChange={this.handleChange} name="username" type="text" placeholder="Enter Username" />
          <input onChange={this.handleChange} name="password" type="password" placeholder="Enter Password" />
          <button type="submit">Login</button>
          <NavLink to="/signup">Sign Up</NavLink>
        </form>
      </div>
    )
  }
}
