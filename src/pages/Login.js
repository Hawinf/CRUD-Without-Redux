import axios from 'axios'
import React, { useState } from 'react'
import { API } from '../const/endpoint'
import './login.css'

const Login = () => {
    const [em, setEm] = useState('')
    const [pass, setPass] = useState('')

    const inputEm = (e) => {
        setEm(e.target.value)
    }
    const inputPass = (e) => {
        setPass(e.target.value)
    }
    const handleLogin = () => {
        const data = {
            email: em,
            password: pass
        }

        axios
        .post(API.LOGIN, data)
        .then((res) => console.log(res))
        .catch((err) => console.log(err.message))
    }

  return (
    <div>
        <div className='login-wrapper'>
            <div className='login-container'>
                <h1>Log In Dulu Ya</h1>
                <input onChange={inputEm} placeholder='Email'/>
                <input onChange={inputPass} placeholder='Password'/>
                <button onClick={handleLogin}>Log In</button>
            </div>
        </div>
    </div>
  )
}

export default Login
