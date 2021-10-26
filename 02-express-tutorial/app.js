// console.log('Express Tutorial')
const { response } = require('express')
const http = require('http')
const {readFileSync} = require('fs');

//get all files
const homePage = readFileSync('./index.html')
const navBar = readFileSync('./navbar-app/index.html')
const favicon = readFileSync('./favicon.ico')

const server = http.createServer((request, response)=>{
    console.log('user hit the server')
    console.log(request.method)
    console.log(request.url)
    // response.writeHead(200, {'content-type':'text/html'})
    // console.log(request);
    const url = request.url
    if(url === '/'){
        response.writeHead(200, {'content-type':'text/html'})
        // response.write(`<h1 style="text-align: center">Home Page</h1>`, 'utf-8')
        // response.write(`<p style="text-align: center">Demo Paragraph</p>`, 'utf-8')
        response.write(homePage)
        response.end()
    }else if(url === '/navbar' || url === '/navbar/'){
        response.writeHead(200, {'content-type':'text/html'})
        response.write()
        response.end()
        
    }
    else if(url == '/favicon.ico'){
        response.writeHead(200, {'content-type':'image/x-icon'})
        response.write(favicon)
        response.end()
    }
    else if(url === '/contact/' || url === '/contact'){
        response.writeHead(200, {'content-type':'text/html'})
        response.write(`<h1 style="text-align: center">Contact Page</h1>`, 'utf-8')
        response.write(`<p style="text-align: center">Demo Paragraph</p>`, 'utf-8')
        response.end()
    }else if(url === '/about/' || url === '/about'){
        response.writeHead(200, {'content-type':'text/html'})
        response.write(`<h1 style="text-align: center">About Page</h1>`, 'utf-8')
        response.write(`<p style="text-align: center">Demo Paragraph</p>`, 'utf-8')
        response.end()
    }else{
        response.writeHead(400, {'content-type':'text/html'})
        response.write(`<h1 style="text-align: center">Error Page</h1>`, 'utf-8')
        response.write(`<p style="text-align: center">Demo Paragraph</p>`, 'utf-8')
        response.end()
    } 
    // response.end()
})


server.listen(5000)

