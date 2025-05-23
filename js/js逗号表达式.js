// 在 JavaScript 中，逗号表达式是一种使用逗号分隔的表达式，
// 它会依次执行每个子表达式，并返回最后一个子表达式的结果。逗号表达式的语法如下：

// expression1, expression2, expression3, ..., expressionN
// 在这种情况下，逗号将各个表达式连接在一起，从左到右依次执行每个表达式，
// 并返回最后一个表达式的值。逗号表达式通常用于在一行代码中执行多个操作，但只返回最后一个操作的结果。
let a = 1, b = 2, c = 3;

let result = (a++, b++, c++);

console.log(result); // 输出 3，因为最后一个表达式 c++ 的结果是 3
console.log(a, b, c); // 输出 2 3 4，因为逗号表达式依次执行了 a++, b++, c++
// 在这个示例中，逗号表达式 (a++, b++, c++) 依次执行了 a++、b++ 和 c++，
// 并返回了最后一个表达式 c++ 的结果。这种表达式通常在需要简单的连续操作并只关心最后结果的情况下使用。