var fs = require('fs');

//In the next line, colson is the name of the file to read from
var contents = fs.readFileSync('colson', 'utf8');
console.log(contents);
console.log('after calling readFile'); //this will be displayed only after the content has been read.

