// Object.assign 是一个 JavaScript 方法，用于将一个或多个源对象的属性复制到目标对象中。

// 语法为：Object.assign(target, ...sources)

// target 是目标对象，接收属性的对象。
// sources 是一个或多个源对象，从中复制属性到目标对象。
// Object.assign 方法会按照参数的顺序，将源对象的可枚举属性复制到目标对象中。
// 如果多个源对象具有相同的属性名，则后面的源对象的属性值会覆盖前面的源对象。

const target = {};
const source1 = { foo: 1 };
const source2 = { bar: 2 };

Object.assign(target, source1, source2);

console.log(target); // { foo: 1, bar: 2 }
// 在上面的示例中，我们创建了一个空对象 target，然后使用 Object.assign 方法将 source1 
// 和 source2 的属性复制到 target 中。最终，target 对象包含了 source1 和 source2 的属性，
// 结果为 { foo: 1, bar: 2 }。

// 需要注意的是，Object.assign 方法执行的是浅拷贝，即只复制属性的值，而不是复制属性所引用的对象。
// 如果源对象的属性值是对象或数组等引用类型，复制的是引用，而不是创建新的对象。