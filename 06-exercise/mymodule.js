const fs = require('fs');
const path = require('path');

module.exports = (directory, ext, callback) => {
    fs.readdir(directory, (err, list) => {
        if (err) {
            return callback(err);
        }
        
        const filtered = list.filter((file) => {
            return path.extname(file) === '.' + ext;
        });
        
        callback(null, filtered);
    });
};