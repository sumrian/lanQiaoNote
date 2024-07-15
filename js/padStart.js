// padStart 是 JavaScript 字符串的一个方法，用于在当前字符串的开头填充指定的字符串，
// 直到达到指定的长度。这个方法的语法如下：

// str.padStart(targetLength [, padString])
// targetLength：要填充到的目标长度。如果当前字符串的长度小于该长度，则会在开头填充。
// padString（可选）：用于填充的字符串。如果未提供，默认使用空格作为填充字符。
// 下面是一个简单的示例，演示如何使用 padStart 方法：

{
    let str = '7';
console.log(str.padStart(3, '0')); // 输出: '007'
}
// 在这个示例中，我们将字符串 '7' 使用 padStart 方法填充到长度为 3，
// 使用 '0' 填充。最终结果是 '007'。

//展示常用的补零方法
const padZero = (num, n = 2) => 
(String(num).length < n ? `${new Array(n).fill('0').join('')}${num}` : String(num));

// new Array(n).fill('0').join('')：

// new Array(n) 创建了一个包含 n 个元素的新数组。
// .fill('0') 将数组中的所有元素填充为 '0'，即在数组中生成 n 个 '0'。
// .join('') 将数组中的所有元素拼接成一个字符串，由于数组中全是 '0'，因此最终得到的是长度为 n 的 '0' 字符串。
// ${new Array(n).fill('0').join('')}：

// 这部分代码生成了一个长度为 n 的 '0' 字符串，用于前置补零。
// ${num}：

// 这里是将数字 num 转换为字符串。
// 综合起来，${new Array(n).fill('0').join('')}${num} 这段代码的作用是将数字 num 前补零至指定长度 n。例如，如果 n 为 3，num 为 7，那么最终结果将会是 '007'。
