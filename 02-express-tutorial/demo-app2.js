const express = require('express');
const path = require('path')
const app = express()

//setup static and middleware
app.use(express.static('./public'))

app.get('/',(req, res)=>{
    res.status(200).sendFile(path.resolve(__dirname, './navbar-app/index.html'))
})

app.get('*', (req, res)=>{
    res.status(400).send(`resource not found`)
})

app.listen(5000, ()=>{
    console.log('Server is listening on port 5000');
})