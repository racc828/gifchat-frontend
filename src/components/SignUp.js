import React from 'react'

export default class SignUp extends React.Component {

  constructor(){
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
    this.props.signUpUser(user)
  }

  render() {
    return(
      <div>
        <h1>Sign Up</h1>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} name="username" type="text" placeholder="username" />
          <input onChange={this.handleChange} name="password" type="password" placeholder="password" />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    )
  }

}
