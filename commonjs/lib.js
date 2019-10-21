console.log('hello world');

exports.hello = 'world';

exports.add = function add(a, b) {
  return a + b;
}

exports.obj = {
  hello: 'world'
}

module.exports = function minus(a, b) {
  return a - b;
}

setTimeout(() => {
  console.log(exports);
}, 1000);
