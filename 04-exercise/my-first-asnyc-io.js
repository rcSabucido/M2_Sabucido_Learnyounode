const fs = require('fs');

fs.readFile(process.argv[2], (err, data) => {
    if(!err) {
        const str = data.toString();
        const strArr = str.split('\n');
        console.log(strArr.length - 1);
    }
});