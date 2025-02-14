const net = require('net');

const portNum = process.argv[2];

function zeroPad(number) {
    if (number < 10) {
        return `0${number}`;
    }
    return number;
}

const server = net.createServer((socket) => {
    const date = new Date();

    const year = date.getFullYear();
    const month = zeroPad(date.getMonth() + 1);
    const day = zeroPad(date.getDate());
    const hour = zeroPad(date.getHours());
    const minutes = zeroPad(date.getMinutes());

    const formattedDate = `${year}-${month}-${day} ${hour}:${minutes}\n`;

    socket.end(formattedDate);
});

server.listen(portNum);