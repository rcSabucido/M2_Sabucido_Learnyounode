const http = require('http');
const fs = require('fs');
const map = require('through2-map');

const portNum = process.argv[2];

const server = http.createServer((req, res) => {
    console.log(req.body);
    req.pipe(map(chunk => chunk.toString().toUpperCase())).pipe(res);
});

server.listen(portNum);