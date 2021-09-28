// import dotenv from 'dotenv'
const dotenv = require('dotenv')
// import express from 'express'
const express = require('express')
// import cors from 'cors'
const cors = require('cors')



const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

//safe database connection
dotenv.config({ path: './config.env' })
require('./database/conn')

const PORT = process.env.PORT || 5000;
const User = require('./model/registration')
//Routes

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400).json({ error: "Please fill both fields" });
    } else {
        User.findOne({ email: email }, (err, user) => {
            if (user) {
                if (password === user.password) {
                    res.send({ message: "Login successfully", user: user })
                }
                else {
                    res.send({ message: "Wrong password" })
                }
            } else {
                res.send({ message: "User not registered" })
            }
        })
    }

})

app.post('/register', (req, res) => {
    const { name, email, password } = req.body;
    User.findOne({ email: email }, (err, user) => {
        if (user) {
            res.send({ message: "User already registered" })
        } else {
            //create user object
            const user = new User({
                name, email, password
            })
            //save user object to database
            user.save((err) => {
                if (err) {
                    res.send(err)
                } else {
                    res.send({ message: "Registered Successfully..." })
                }
            })
        }
    })

    // const {name, email, password, reEnterPassword} = req.body
    // if(name && email && password)
})

//serving static files to heroku
if (process.env.NODE_ENV == "production") {
    //middleware
    app.use(express.static("loginregistration/build"))
}

app.listen(PORT, () => {
    console.log(`Listening on port number ${PORT}`)
})