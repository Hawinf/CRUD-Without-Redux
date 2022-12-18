import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { API } from '../const/endpoint'
import { useNavigate } from 'react-router-dom'
import Navbar from '../component/navbar/navbar'
import './login.css'

const Login = () => {
    const [em, setEm] = useState('')
    const [pass, setPass] = useState('')
    const [isLogin, setIsLogin] = useState(false);
    const navigate = useNavigate();

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
        .then((res) => {
            console.log(res);
            localStorage.setItem('token', res.data.access_token)
            navigate('/discover')
        })
        .catch((err) => console.log(err.message))
    };

    useEffect(() => {
        const token = localStorage.getItem('token');
        if(!token) {
            setIsLogin(false);
        } else {
            setIsLogin(true);
        }
    })

    const handleLogOut = () => {
        localStorage.removeItem('token');
        navigate('/');
    }

  return (
    <div>
        <Navbar />
        {
            isLogin ? (
                <button onClick={handleLogOut}>Log Out</button>
            ) : (

        <div className='login-wrapper'>
            <div className='login-container'>
                <h1>Log In Dulu Ya</h1>
                <input onChange={inputEm} placeholder='Email'/>
                <input onChange={inputPass} placeholder='Password'/>
                <button onClick={handleLogin}>Log In</button>
            </div>
        </div>

            )
        }
        
    </div>
  )
}

export default Login
