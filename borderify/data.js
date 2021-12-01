const readLine = require('readline');
const f = require('fs');
var file = './mydata.txt';
var rl = readLine.createInterface({
    input : f.createReadStream(file),
    output : process.stdout,
    terminal: false
});
rl.on('line', function (text) {
 console.log(text);
});