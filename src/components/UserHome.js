import React from 'react'
import ChatRooms from './ChatRooms'
import AddChatRoomForm from './AddChatRoomForm'
import ChatRoomsAdapter from '../adapters/ChatRoomsAdapter'

export default class UserHome extends React.Component {

  constructor() {
    super()
    this.state = {
      allChatRooms: [],
      myChatRooms: []
    }
  }

  componentDidMount(){
    ChatRoomsAdapter.getAllChatRooms()
    .then(chatRooms => {
      this.setState({
        allChatRooms: chatRooms.allChats,
        myChatRooms: chatRooms.myChats
      })
    })
  }


  addChatRoom = (chatRoom) => {
    ChatRoomsAdapter.addChatRoom(chatRoom)
    .then(chatRoomData => {
      this.setState({
        allChatRooms: [...this.state.allChatRooms, chatRoomData],
        myChatRooms: [...this.state.myChatRooms, chatRoomData]
      })
    })
  }


  render(){
    return(
      <div>
        <p>Welcome {this.props.currentUser.username}</p>
        <button onClick={this.props.logOutUser}>Log Out </button>
        <AddChatRoomForm addChatRoom={this.addChatRoom} />
        <ChatRooms allChatRooms={this.state.allChatRooms} myChatRooms={this.state.myChatRooms}  />
      </div>
    )
  }
}
