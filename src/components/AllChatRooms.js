import React from 'react'
import ChatRoom from './ChatRoom'

export default class AllChatRooms extends React.Component {


  setActiveChat = (e) => {
    let chat = e.currentTarget.dataset.id
    this.props.setActiveChat(chat)
  }

  render() {
    return(
      <div>
        {this.props.allChatRooms.map((chatRoom, i) => {
          return <div onClick={this.setActiveChat} data-id={chatRoom.id} className="chat-list" key={i}>{chatRoom.name}</div>
        })}
      </div>
    )
  }
}
