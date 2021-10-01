import React, { useState } from "react"
import {  Button } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import ReactDOM from "react-dom"
import Todo from "../Todo"
import { Provider } from "react-redux"
import reducer from '../store/reducers/index'
import { createStore } from "redux";


// const getLocal=()=>{
//   let list=localStorage.getItem('lists');
//   if(list){
//     return JSON.parse(localStorage.getItem('lists'));
//   }
//   else{
//     return [];
//   }
// }
export default function Dashboard() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }

 

const store = createStore(reducer);

  return (
    <>  
  <Provider store={store}>
      <Todo />
  </Provider>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
    </>
  )
}