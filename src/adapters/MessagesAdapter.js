const path = 'http://localhost:3000/api/v1/messages'
export default class MessagesAdapter {

  static addMessage(message, chatId){
    debugger
    return fetch(path, {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify({
        message_text: message.message,
        chat_id: chatId
      })
    })
    .then( resp => resp.json())
    }

  // static getAllMessages(){
  //   return fetch(path, {
  //     method: 'GET',
  //     headers: headers()
  //   })
  //   .then( resp => resp.json())
  // }

  }

let headers = () => {
  return {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('token')
  }
}
