const path = 'http://localhost:3000/api/v1/chats'
export default class ChatRoomsAdapter {

  static addChatRoom(chatRoom){
    return fetch(path, {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify(chatRoom)
    })
    .then( resp => resp.json())
    }

  static getAllChatRooms(){
    return fetch(path, {
      method: 'GET',
      headers: headers()
    })
    .then( resp => resp.json())
  }

  static getChatRoom(chatRoom) {
    debugger
    return fetch(`${path}/${chatRoom}`, {
      method: 'GET',
      headers: headers()
    })
    .then( resp => resp.json())
  }

  }

let headers = () => {
  return {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('token')
  }
}
