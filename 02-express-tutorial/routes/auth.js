const express = require('express')
const router = express.Router()

router.post('/', (req, res)=>{
    // console.log("ERROR", req);
    const {name} = req.body
    if(name){
        return res.status(200).send(`Welcome ${name}`)
    }else{
        res.status(401).send(`Please Provide Credentials`)
    }
})
module.exports = router

