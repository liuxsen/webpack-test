require('./css/base.css');

var a = require('./a');
a.sayHello();
var b = require('./b');
b.sayHello();
var c = require('./c');
c.sayHello();

document.write('hello webpack3');
var img = document.createElement('img');
img.src = require('./images/aa.jpg');
document.body.appendChild(img);

require('./js/test.js')