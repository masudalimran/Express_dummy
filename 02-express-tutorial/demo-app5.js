const express = require('express')
const app = express()
const Port = 5500
const apiPeople = require('./routes/people')
const Login = require('./routes/auth')

//static assets
app.use(express.static('./methods-public'))
//parse form data
app.use(express.urlencoded({extended: false}))
//parse from json
app.use(express.json())

// TODO Router assets
app.use('/login',Login)
app.use('/api/people', apiPeople)

app.listen(Port, ()=> {
    console.log("Server is listening to port 5500..............");
})