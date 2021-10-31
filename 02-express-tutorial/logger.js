const logger = (req, res, next)=>{
    const method = req.method
    const url = req.url
    let hour = new Date().getHours()
    let is_am = 'AM'
    if(hour > 12){
        hour -= 12
        is_am = 'PM'
    }
    const min = new Date().getMinutes()
    const sec = new Date().getSeconds()
    console.log("Method is :",method);
    console.log("Url is:", url);
    console.log("Time is: ", hour,"h :",min,"m :",sec,"s",is_am );
    // res.send("MIDDLEWARE")
    next()
}

module.exports = logger