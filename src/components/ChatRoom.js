import React from 'react'

const ChatRoom = (props) => {

    return(
      <div>
        <p>{props.activeChatRoom.name}</p>
        <p>{props.activeChatRoom.category}</p>
      </div>
    )
  }

  export default ChatRoom
