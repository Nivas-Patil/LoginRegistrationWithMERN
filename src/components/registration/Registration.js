import React, { useState } from 'react'
import axios from 'axios';
import './registration.css'
import {useHistory} from 'react-router-dom'
const Registration = () => {
    const history = useHistory()
    //Create user through useState hook
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        reEnterPassword: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value)
        setUser({
            ...user,
            [name]: value
        })
    }
    const register = () => {
        const { name, email, password, reEnterPassword } = user
        if (name && email && password && (password === reEnterPassword)) {
            // alert("Posted")
            axios.post('/register', user)
            .then((res)=>{
                alert(res.data.message);
                history.push('/login')
            }).catch((err)=>{
                console.log(err)
            })
        }else{
            alert("bad request. All fields are mandatory")
        }

    }
    return (
        <>
            <div className="register">
                <form method="POST">
                <h1>Register</h1>
                <input type="text" name="name" value={user.name} placeholder="Enter your name" onChange={handleChange} autoComplete="off" /><br />
                <input type="text" name="email" value={user.email} placeholder="Enter your email" onChange={handleChange} autoComplete="off" /><br />
                <input type="password" name="password" value={user.password} placeholder="Enter your password" onChange={handleChange} autoComplete="off" /><br />
                <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Confirm password" onChange={handleChange} autoComplete="off" /><br />
                <div className="button" onClick={register}>Register</div>
                <div>Or</div>
                <div className="button" onClick={()=>history.push('/login')}>Login</div>
                </form>
            </div>
        </>
    )
}

export default Registration
