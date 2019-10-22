const EventEmitter = require('events').EventEmitter;

class NodePackage extends EventEmitter {
  constructor() {
    super();
    setInterval(() => {
      this.emit('newPackage', { line: Math.random() * 100 })
    }, 3000);
  }
}

const NodePackageDemo = new NodePackage();

NodePackageDemo.addListener('newPackage', (res) => {
  console.log(res);
})
