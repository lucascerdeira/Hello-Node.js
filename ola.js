const http = require('http');

const server = http.createServer(function ( req,resp){
    return resp.end('Ola textenode.js')
});

server.listen(3333);
