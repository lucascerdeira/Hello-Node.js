const http = require('http');

const server = http.createServer(function (req, resp){
    return resp.end('<h1>Hello Node.js</h1>')
});

server.listen(3333);
