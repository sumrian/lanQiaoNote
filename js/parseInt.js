// ; parseInt() 是 JavaScript 中一个非常有用的内置函数,用于将字符串转换为整数。它的语法如下:

// ; parseInt(string, radix)
// ; string: 要被转换的字符串。
// ; radix: 可选参数,表示要解析的数字的基数。它介于 2 和 36 之间,如果没有指定该参数或其值为 0,则通常默认为 10。
// ; 下面是一些使用 parseInt() 的示例:

; 基本用法:
console.log(parseInt("42"));       // 输出: 42
console.log(parseInt("-10"));      // 输出: -10
console.log(parseInt("3.14"));     // 输出: 3
; 指定进制:
console.log(parseInt("101", 2));   // 输出: 5 (二进制 101 转十进制)
console.log(parseInt("FF", 16));   // 输出: 255 (十六进制 FF 转十进制)
console.log(parseInt("10", 8));    // 输出: 8 (八进制 10 转十进制)
; 处理非数字字符串:
console.log(parseInt("hello"));    // 输出: NaN (Not a Number)
console.log(parseInt("42hello"));  // 输出: 42 (只转换数字部分)
console.log(parseInt("hello42"));  // 输出: NaN
; 处理小数:
console.log(parseInt("3.14"));     // 输出: 3 (只取整数部分)
console.log(parseInt("3.14", 10)); // 输出: 3
console.log(parseInt("3.14", 2));  // 输出: 3 (二进制 11 转十进制)
parseInt() //函数非常有用,可以帮助你将字符串转换为整数。它在处理用户输入、解析数据等场景中都有广泛的应用。需要注意的是,如果字符串无法被转换为数字,它会返回 NaN(Not a Number)。