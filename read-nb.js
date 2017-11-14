var fs = require('fs');
 
fs.readFile('colson', 'utf8', function(err, contents) {
    console.log(contents);
});
 
console.log('after calling readFile');
