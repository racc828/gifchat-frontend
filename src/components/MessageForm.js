import React from 'react'

export default class MessageForm extends React.Component {
  constructor() {
    super()
    this.state = {
      message: ""
    }
  }

  handleChange = (e) => {
    let property = e.target.name
    let value = e.target.value
    this.setState({
      [property] : value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let message = this.state
    this.props.addMessage(message)
  }


  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="message" onChange={this.handleChange}/>
        <button type="submit">Send</button>
      </form>
    )
  }


}
