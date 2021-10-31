const auth = (req,res, next)=>{
    const {user} = req.query
    if(user === 'john'){
        req.user = {name: "JOHN", id: 3} 
        console.log(req.user);      
        next()
    }else{
        res.status(401).send('Unauthorized')
    }
}

module.exports = auth