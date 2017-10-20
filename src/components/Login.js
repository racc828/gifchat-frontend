import React from 'react'

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
        </form>
      </div>
    )
  }
}
