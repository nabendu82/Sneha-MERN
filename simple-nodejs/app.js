const validator = require('validator');

const writeAndappend = require('./server.js');
writeAndappend();

console.log(validator.isEmail('foo@bar.com'));
console.log(validator.isEmail('foo@bar'));

console.log(process.argv[2]);
console.log(process.argv[3]);