const http = require('http');

const server = http.createServer(function (req, resp){
    return resp.end('Hello Node.js')
});

server.listen(3333);
