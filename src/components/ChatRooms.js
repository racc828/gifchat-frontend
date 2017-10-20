import React from 'react'
import MyChatRooms from './MyChatRooms'
import AllChatRooms from './AllChatRooms'

export default class ChatRooms extends React.Component {

  constructor() {
    super()
    this.state = {
      myChatRoomsActive: true
    }
  }

  toggleMyChatRoomsActive = () => this.setState({myChatRoomsActive: !this.state.myChatRoomsActive})

  render(){
    return(
      <div>
        {this.state.myChatRoomsActive ?
          <div><button className="active-chat-tab">MyChats</button> <button className="non-active-chat-tab" onClick={this.toggleMyChatRoomsActive}>AllChats</button></div> : <div> <button className="non-active-chat-tab" onClick={this.toggleMyChatRoomsActive}>MyChats</button><button className="active-chat-tab">AllChats</button></div> }
          {this.state.myChatRoomsActive ? <MyChatRooms setActiveChat={this.props.setActiveChat} myChatRooms={this.props.myChatRooms} /> : <AllChatRooms setActiveChat={this.props.setActiveChat} allChatRooms={this.props.allChatRooms} /> }
      </div>
    )
  }
}
