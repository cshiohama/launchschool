// name property added to make objects easier to identify
let foo = {name: 'foo'};
let bar = Object.create(foo);
bar.name = 'bar';
let baz = Object.create(bar);
baz.name = 'baz';
let qux = Object.create(baz);
qux.name = 'qux';

foo.ancestors = function() {
  let result = [];
  let obj = Object.getPrototypeOf(this);
  
  while (obj !== null) {
    if (obj.name)
      result.push(obj.name);
    else
      result.push('Object.prototype');
    
    obj = Object.getPrototypeOf(obj);
  }
  
  return result;
}

console.log(qux.ancestors());  // returns ['baz', 'bar', 'foo', 'Object.prototype']
console.log(baz.ancestors());  // returns ['bar', 'foo', 'Object.prototype']
console.log(bar.ancestors());  // returns ['foo', 'Object.prototype']
console.log(foo.ancestors());  // returns ['Object.prototype']
