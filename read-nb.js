var fs = require('fs');
 
//file name to read from is colson
fs.readFile('colson', 'utf8', function(err, contents) {
    console.log(contents);
});
 
console.log('after calling readFile');
