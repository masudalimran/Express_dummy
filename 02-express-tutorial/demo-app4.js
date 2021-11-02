const express = require('express')
const app = express()
const Port = 5000

//! Third Party middleware 
const morgan  = require('morgan')

//req => middleware => response
//! MIDDLE WARE
const logger = require('./logger')
const authorize = require('./authorize')

app.use('/api',[logger, authorize, morgan('tiny')])
// app.use('/api',[logger, authorize])
// app.use(morgan('tiny'))

app.get('/', (req, res)=> {
    res.send(`Home Page`)
})
app.get('/about', (req, res)=> {
    res.send(`About Page`)
})
app.get('/api/products', (req, res)=> {
    res.send(`Products Page`)
})
app.get('/api/items', (req, res)=> {
    res.send(`Items Page`)
})

app.listen(Port, () => {
    console.log(`Server is listening to Port 5000........`);
})
