var fs = require('fs')
// read from a file
fs.readFile('./data.json', (err,data) => {
if(err)
return console.error(err) // return error if can’t read from the file
console.log(JSON.parse(data)); // log the file contents to the console if all is OK.
})