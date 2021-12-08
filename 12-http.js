const http = require('http')

const server = http.createServer((req,res)=>{
    //console.log(req);
    if(req.url === '/'){
        res.end('Welcome to home page')
    }
    //only works with else if and just if
    else if(req.url === '/about'){
        res.end('Welcome to about page')
    }
    else {res.end(`
    <h1>ooops!</h1>
    <p>We cant find</p>
    <a href ='/'> back home</a>
    `)}
})

server.listen(5000)