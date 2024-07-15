// new Array(n).fill('0').join('') 和 '0'.repeat(n) 
// 都可以用于生成由重复字符组成的字符串，但它们之间存在一些区别。

// 行为差异：

// new Array(n).fill('0').join('')：这种方法首先创建了一个长度为 n 的数组，
// 然后使用 fill('0') 将数组填充为由 '0' 组成的数组，最后使用 join('') 
// 将数组中的元素连接成一个字符串。
// '0'.repeat(n)：这种方法直接使用字符串 '0' 的 repeat() 方法来生成重复字符的字符串。
// 兼容性：

// new Array(n).fill('0').join('')：这种方法在所有支持 ES5 的
//  JavaScript 运行环境中都可以使用。
// '0'.repeat(n)：这种方法是在 ES6（ECMAScript 2015）中引入的新方法，
// 因此在较旧的 JavaScript 运行环境中可能不被支持。
// 性能：

// '0'.repeat(n) 通常比 new Array(n).fill('0').join('') 更高效，
// 因为它直接使用字符串的原生方法来重复字符，而不需要创建和填充数组。
// str.repeat(n)生成重复n次str字符串的新字符串，不会改变原字符串