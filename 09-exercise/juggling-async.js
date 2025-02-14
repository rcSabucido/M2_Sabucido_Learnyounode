const http = require('http');
const bl = require('bl');

let output = [];
const urls = process.argv.slice(2);

function printOutput(output) {
    for (let i = 0; i < output.length; i++) {
        console.log(output[i]);
    }
}

function makeReq(url, index) {
    http.get(url, (res) => {
        res.pipe(bl((err, data) => {
            if (err) {
                return console.error(err);
            }

            output[index] = data.toString();
            if (output.length === urls.length) {
                printOutput(output);
            }
        }));
    });
}

for (let i = 0; i < urls.length; i++) {
    makeReq(urls[i], i);
}