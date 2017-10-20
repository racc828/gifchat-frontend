import React from 'react'

export default class MyChatRooms extends React.Component {


  setActiveChat = (e) => {
    let chat = e.currentTarget.dataset.id
    this.props.setActiveChat(chat)
  }

  render() {
    return(
      <div>
        {this.props.myChatRooms.map((chatRoom, i) => {
          return <div onClick={this.setActiveChat} data-id={chatRoom.id} className="chat-list" key={i}>{chatRoom.name}</div>
        })}
      </div>
    )
  }
}
