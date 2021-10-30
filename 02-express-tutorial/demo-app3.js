const express = require('express')
const app = express()
const {products, people} = require('./data')
const Port = 5000
const path = require('path')

app.get('/', (req, res)=>{
    res.status(200).send(`
    <div style="text-align: center">
        <h1><a href="/">Home Page</a></h1>
        <a href="/api/all">Show All Data</a><br>
        <a href="/api/products">Products</a><br>
        <a href="/api/products/description">Products Description</a><br>
        <a href="/api/people">People</a><br>
        <a href="/api/bismib">BISMIB</a>
    </div> 
    <style>
        a:hover{
            color: Red;
            font-size: 48px;
        }
        body{
            background: yellowgreen;
        }
    </style>   
    `)
})

app.get('/api/all', (req, res)=>{
    res.status(200).json(people.concat(products).concat([{name: 'John'}, {name: 'Susan'}]))
})

app.get('/api/products', (req, res)=>{
    const newProduct = products.map((product)=>{
        const {id, name, image} = product
        return {id, name, image}
    })
    res.status(200).json(newProduct)
})

app.get('/api/products/:productID', (req, res)=>{
    // console.log(req);
    // console.log(req.params);
    const {productID} = req.params
    const singleProduct = products.find((product)=> product.id === Number(productID))
    if(singleProduct){
        res.status(200).json(singleProduct)
    }
    res.status(404).send(`404 Eror!! singleProduct not found`)
})

app.get('/api/v1/query',(req, res)=>{
    console.log(req.query);
    const {search, limit} = req.query
    let sortedProducts = [...products]
    // res.send('Hello World')
    if(search){
        sortedProducts = sortedProducts.filter((product)=>{
            return product.name.startsWith(search)
        })
    }
    if(limit){
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }
    if(sortedProducts<1){
        // res.status(200).send('No Product Match Your Criteria')
        return res.status(200).json({success: true, data:[]})
    }
    return res.status(200).json(sortedProducts)
})

app.get('/api/products/description', (req, res)=>{
    const newProduct = products.map((product)=>{
        const {price, desc} = product
        return {price, desc}
    })
    res.status(200).json(newProduct)
})

app.get('/api/people', (req, res)=>{
    res.status(200).json(people)
})

app.get('/api/bismib', (req, res)=>{
    res.status(200).json([{name: 'Masud'}, {name: 'Said'}, {name: 'Saif'}])
})

// FIX FAVICON ERROR
var options = {
    root: path.join(__dirname)
}
var favicon_filename = 'favicon1.ico'

app.get('/favicon.ico',(req, res)=>{
    res.sendFile(favicon_filename ,options, (err)=>{
        if(err){
            console.log("Found Error While Sending Favicon File: ",err);
        }else{
            console.log('Favicon File Successfully Sent:', favicon_filename)
        }
    })
})
// FIX FAVICON ERROR

// Handle Other Error
app.get('*',(req, res)=>{
    res.status(400).send('Resource Not Found')
})
// Handle Other Error

app.listen(Port, ()=>{
    console.log('Server is listening on port 5000......');
})


