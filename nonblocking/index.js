const glob = require('glob');

let result = null;

console.time('glob');
result = glob.sync(__dirname + '/**/*')
console.timeEnd('glob');


console.time('glob2');
glob(__dirname + '/**/*', (err, res) => {
  result = res;
})
console.timeEnd('glob2');
console.log(123);
