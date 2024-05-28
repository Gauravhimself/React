import React, { useState, useContext } from 'react'
import UserContextProvider from '../Context/UserContextProvider'
import UserContext from '../Context/UserContext'

export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [age, setAge] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) =>{
        e.preventDefault()
        setUser({username, password,age})
    }
  return (
    <div>
        <h2>Login</h2>
        <input type="text" placeholder="Username" value={username} onChange={(e)=> setUsername(e.target.value)} />
        {" "}
        <input type="text" placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)} />
        {" "}
        <input type="text" placeholder="age" value={age} onChange={(e)=> setAge(e.target.value)} />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}
