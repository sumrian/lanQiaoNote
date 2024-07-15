// toString() 是 JavaScript 中所有对象都具有的一个方法,它的作用是将对象转换为一个字符串表示。这个方法的基本用法如下:

// 基础用法:
// 对于原始数据类型(number、string、boolean、null、undefined),toString() 方法会返回该值的字符串表示。
// 对于引用数据类型(object、array、function),toString() 方法会返回该对象的类型信息。
// 例如:

console.log((123).toString()); // "123"
console.log(true.toString()); // "true"
console.log([1, 2, 3].toString()); // "1,2,3"
console.log({a: 1, b: 2}.toString()); // "[object Object]"
// 进制转换:
// toString() 方法还可以接受一个可选的参数,表示要转换的进制数。
// 常见的用法是将数字转换为二进制、八进制或十六进制字符串。
// 例如:

console.log((255).toString(2)); // "11111111"
console.log((255).toString(8)); // "377"
console.log((255).toString(16)); // "ff"
// 日期对象的使用:
// 对于 Date 对象,toString() 方法会返回一个表示该日期和时间的字符串。
// 例如:

const now = new Date();
console.log(now.toString()); // "Sat May 20 2023 10:13:22 GMT+0000 (Coordinated Universal Time)"
// 总之,toString() 方法是 JavaScript 中非常常用的一个方法,它可以将各种数据类型转换为字符串表示,在很多场景下都有用到,比如输出调试信息、格式化数据等。