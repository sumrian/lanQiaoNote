// getAttribute() 是 JavaScript 中用于获取指定属性值的方法。
// 它可以用于获取元素节点的属性值。
// getAttribute() 方法接受一个参数，即要获取的属性名。它会返回指定属性的值作为字符串。
// 如果指定的属性不存在，则返回 null。
const element = document.getElementById('myElement');
const value = element.getAttribute('data-id');
console.log(value);
// 在上面的代码中，我们首先获取了具有 id 属性为 "myElement" 的元素。
// 然后，使用 getAttribute('data-id') 获取了 data-id 属性的值，
// 并将其存储在 value 变量中。最后，通过 console.log() 打印出该值。
