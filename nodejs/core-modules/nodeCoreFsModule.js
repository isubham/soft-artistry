var fs = require('fs');
const { get } = require('http');
// write
const path = 'test.txt'
fs.writeFile(path, function(error, data)
    { 
        if (error) {
            throw error
        }
        else return data
    }
);
// read 
async function getData(path) {
    return fs.promises.readFile(path)
}

console.log(getData(path));

