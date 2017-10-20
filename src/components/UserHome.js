import React from 'react'
import ChatRooms from './ChatRooms'
import ChatRoom from './ChatRoom'
import AddChatRoomForm from './AddChatRoomForm'
import ChatRoomsAdapter from '../adapters/ChatRoomsAdapter'
import MessagesAdapter from '../adapters/MessagesAdapter'

export default class UserHome extends React.Component {

  constructor() {
    super()
    this.state = {
      allChatRooms: [],
      myChatRooms: [],
      activeChat: false,
      activeChatRoom: {}
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

  setActiveChat = (chat) => {
    ChatRoomsAdapter.getChatRoom(chat)
    .then(chatRoomData => {
      this.setState({
        activeChat: true,
        activeChatRoom: chatRoomData
      })
    })
  }

  resetActiveChat = () => {
    this.setState({
      activeChat: false,
      activeChatRoom: {}
    })
  }

  addMessage = (message, chatId) => {
    MessagesAdapter.addMessage(message, chatId)
    .then(chatRoomData => {
      this.setState({
        activeChatRoom: chatRoomData
      })
    })
  }


  render(){
    return(
      <div>
        <p>Welcome {this.props.currentUser.username}</p>
        <button onClick={this.props.logOutUser}>Log Out </button>
        {this.state.activeChat ?
        <div>
          <button onClick={this.resetActiveChat}> Back </button>
          <ChatRoom addMessage={this.addMessage} activeChatRoom={this.state.activeChatRoom} />
        </div> :
        <div>
          <AddChatRoomForm addChatRoom={this.addChatRoom} />
          <ChatRooms setActiveChat={this.setActiveChat} allChatRooms={this.state.allChatRooms} myChatRooms={this.state.myChatRooms}  />
        </div> }

      </div>
    )
  }
}
