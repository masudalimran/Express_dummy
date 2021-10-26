// console.log('Express Tutorial')
const { response } = require('express')
const http = require('http')
const {readFileSync} = require('fs');

//get all files
const homePage = readFileSync('./index.html')
const navBar = readFileSync('./navbar-app/index.html')
const navBarStyles = readFileSync('./navbar-app/styles.css')
const navBarImage = readFileSync('./navbar-app/logo.svg')
const navBarLogic = readFileSync('./navbar-app/browser-app.js')
const favicon = readFileSync('./favicon.ico')

const server = http.createServer((request, response)=>{
    console.log('user hit the server')
    console.log(request.method)
    console.log(request.url)
    // response.writeHead(200, {'content-type':'text/html'})
    // console.log(request);
    const url = request.url
    console.log(url);
    if(url === '/'){
        response.writeHead(200, {'content-type':'text/html'})
        // response.write(`<h1 style="text-align: center">Home Page</h1>`, 'utf-8')
        // response.write(`<p style="text-align: center">Demo Paragraph</p>`, 'utf-8')
        response.write(homePage)
        response.end()
    }else if(url === '/navbar' || url === '/navbar/'){
        response.writeHead(200, {'content-type':'text/html'})
        response.write(navBar)
        response.end()
        
    }
    else if(url === '/favicon.ico'){
        response.writeHead(200, {'content-type':'image/x-icon'})
        response.write(favicon)
        response.end()
    }
    else if(url === '/styles.css'){
        response.writeHead(200, {'content-type':'text/css'})
        response.write(navBarStyles)
        response.end()
    }
    else if(url === '/browser-app.js'){
        response.writeHead(200, {'content-type':'text/javascript'})
        response.write(navBarLogic)
        response.end()
    }
    else if(url === '/logo.svg'){
        response.writeHead(200, {'content-type':'image/svg+xml'})
        response.write(navBarImage)
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