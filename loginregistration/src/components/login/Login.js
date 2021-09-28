import axios from 'axios'
import React, {useState} from 'react'
import './login.css'
import {useHistory} from 'react-router-dom'
const Login = ({setloginUser}) => {
    const history = useHistory()
    const[user, setLogin] = useState({
        email: "",
        password: ""
    })
    const handleLogin = (e) =>{
        const {name, value} = e.target;
        setLogin({
            ...user,
            [name]: value
        })
    }

    const loginuser = () =>{
        axios.post('/login', user)
        .then((res)=>{
            alert("login successfully" )
            setloginUser(res.data.user)
            history.push('/')
        }).catch((err)=>{
            console.log(err)
        })
    }
    return (
        <>
            <div className="login">
                <h1>Login</h1>
                <input type="text" name="email" value={user.email} onChange={handleLogin} placeholder="Enter your email" autoComplete="off" /><br />
                <input type="password" name="password" value={user.password} onChange={handleLogin} placeholder="Enter your password" autoComplete="off" />
                <div className="button" onClick={loginuser} >Login</div>
                <div>Or</div>
                <div className="button" onClick={()=>history.push('/registration')}>Register</div>
            </div>
        </>
    )
}

export default Login
