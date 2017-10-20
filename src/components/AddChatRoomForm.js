import React from 'react'

export default class AddChatRoomForm extends React.Component {

  constructor() {
    super()
    this.state = {
      name: "",
      category: ""
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
    let chatRoom = this.state
    this.props.addChatRoom(chatRoom)
  }


  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="name" onChange={this.handleChange} placeholder="chat name" />
          <input type="text" name="category" onChange={this.handleChange} placeholder="chat category"/>
          <button type="submit" >Submit ChatRoom</button>
        </form>
      </div>
    )
  }
}
