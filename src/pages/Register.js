import axios from 'axios';
import React, {useState} from 'react'
import { API } from '../const/endpoint'
import './register.css'


const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const inputEmail = (e) => {
        setEmail(e.target.value);
    }

    const inputPassword = (e) => {
        setPassword(e.target.value)
    }

    const handleRegis = () => {
        const payload = {
            email: email,
            password: password,
            role: 'Admin'
        };

        axios
            .post(API.REGISTER, payload)
            .then((res) => console.log(res))
            .catch((err) => console.log(err.message))

    }

  return (
    <div>
        <div className='regis-wrapper'>
            <div className='regis-container'>
                <h1>Register Admin</h1>
                <input placeholder='Email' onChange={inputEmail}/>
                <input placeholder='Password' onChange={inputPassword}/>
                <button onClick={handleRegis}>Register</button>
            </div>
        </div>
    </div>
  )
}

export default Register
