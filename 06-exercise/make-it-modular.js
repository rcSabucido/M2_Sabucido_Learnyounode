const mymodule = require('./mymodule');
const directory = process.argv[2];
const ext = process.argv[3];

mymodule(directory, ext, (err, data) => {
    if (err) {
        return console.error('There was an error:', err);
    }
    
    data.forEach((file) => {
        console.log(file);
    });
    });