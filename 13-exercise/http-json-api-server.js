const http = require('http');  
const url = require('url');

const portNum = process.argv[2];   

function formatUnix(date) {
    return {
        unixtime: date.getTime()
    };
}

function formatDate(date) {
    return {
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds()
    };
}

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    const urlObj = url.parse(req.url, true);
    const route = urlObj.pathname;
    const date = new Date(urlObj.query.iso);
    let data = {};
    if (route == '/api/parsetime') {
       data = formatDate(date);
    } else if (route == '/api/unixtime') {
       data = formatUnix(date);
    }

    res.end(JSON.stringify(data));
});

server.listen(portNum);