const fs = require('fs');

let buf = fs.readFileSync(process.argv[2]);
let str = buf.toString();
let strArr = str.split('\n');
console.log(strArr.length - 1);