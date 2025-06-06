// js中使用位运算符会先进行一个转整数操作，所以使用~~或者|0、&1的位运算能实现截断小数向下取整
// ~~ 这个操作符会将计算结果转换为一个整数。它的工作原理是:

// 首先,它会将值转换为一个 64 位的整数(使用 IEEE 754 标准)。
// 然后,它会对这个整数进行两次取反操作。
// 这个过程的效果就是将浮点数或其他数据类型转换为一个整数。它类似于使用 Math.floor() 函数,但是更简洁。
console.log(~~3.14); // 输出 3
console.log(~~-3.14); // 输出 -3
console.log(~~"42"); // 输出 42
console.log(~~null); // 输出 0

// | 0: 这个操作符是位运算中的按位或运算符，可以用来截断小数部分，将结果转换为整数。
// 因此，Math.random() * (b - a + 1) + a | 0 会得到一个介于 a 和 b 之间的随机整数
// （包括 a 和 b）。

// + 操作符:

// 当用于一元操作时,+ 操作符会尝试将操作数转换为数字类型。
// 如果操作数无法转换为数字,它会返回 NaN(Not a Number)。
// 对于浮点数,+ 操作符会保留小数部分。
console.log(+3.14); // 输出 3.14
console.log(+"42"); // 输出 42
console.log(+null); // 输出 0
console.log(+"hello"); // 输出 NaN

