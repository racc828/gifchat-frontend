import React from 'react'
import Message from './Message'
import MessageForm from './MessageForm'


export default class ChatRoom extends React.Component {

  constructor() {
    super()
    this.state = {
      messages: []
    }
  }

  componentDidMount(){
    this.setState({
      messages: this.props.activeChatRoom.messages
    })
  }

  componentWillReceiveProps(props) {
    this.setState({
      messages: props.activeChatRoom.messages
    })
  }

  addMessage = (message) => {
    this.props.addMessage(message, this.props.activeChatRoom.id)
  }


  render() {
    return(
      <div className="chat-room">
        <p>{this.props.activeChatRoom.name}</p>
        <p>{this.props.activeChatRoom.category}</p>
        <div>
          {this.state.messages.map((message, i) => {
            return <Message message={message} key={i}/>
          })}
        </div>
        <div>
          <MessageForm addMessage={this.addMessage} />
        </div>
      </div>
    )}

  }
