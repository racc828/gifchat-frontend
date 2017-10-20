const path = 'http://localhost:3000/api/v1/users'
export default class UsersAdapter {

  static signUpUser (user) {
    return fetch(path, {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify(user)
    })
    .then( resp => resp.json())
    localStorage.setItem('token', user.jwt)
  }
}

let headers = () => {
  return {
    "Content-Type":"application/json",
    "Accept":"application/json"
  }
}
