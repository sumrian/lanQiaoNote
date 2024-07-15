// 在 JavaScript 中，正则表达式是一种强大的工具，用于匹配和操作字符串。
// 正则表达式是由一个模式（pattern）组成，可以用来搜索、替换和提取字符串中的特定部分。

// 以下是一些 JavaScript 中使用正则表达式的基本概念和示例：

// 创建正则表达式：可以使用正则表达式字面量或者 RegExp 构造函数来创建正则表达式。

// 使用字面量：/pattern/flags
// 使用构造函数：new RegExp("pattern", "flags")

// pattern：这是一个字符串参数，表示正则表达式的模式或者说是要匹配的文本模式。
// 这里你可以指定需要匹配的具体文本或者使用正则表达式语法来描述匹配模式。

// flags：这是一个可选的字符串参数，用来指定正则表达式的标志。常见的标志包括：

// i：不区分大小写匹配
// g：全局匹配，匹配所有符合的项
// m：多行匹配
// 常用标志：

// i：不区分大小写匹配
// g：全局匹配，匹配所有符合的项
// m：多行匹配
// 常用方法：

// test()：测试字符串中是否存在匹配项，返回布尔值。
// exec()：在字符串中执行匹配搜索，返回匹配结果的数组。
// match()：返回字符串中与正则表达式匹配的部分。
// matchAll() 方法可以进行全局匹配，并且可以获取每个匹配的详细信息，
// 包括匹配的字符串、捕获分组的内容以及匹配的索引等
// matchAll() 方法获取到的迭代器对象 matches 可以通过 for...of
// 循环逐个访问每个匹配结果。每个匹配结果都是一个数组，
// 其中索引 0 存储匹配的字符串，index 属性存储匹配的索引。
// search()：返回字符串中第一个匹配项的索引。
// replace()：替换匹配的子字符串。
// split()：使用正则表达式或者字符串将字符串拆分为数组。
// 下面是一个简单的示例，演示如何使用正则表达式来匹配字符串中的数字：

// let str = "Today is March 1, 2024.";
// let pattern = /\d+/; // 匹配一个或多个数字
// let result = str.match(pattern);

// console.log(result); // 输出: ["1"]
// 在这个示例中，正则表达式 \d+ 匹配了字符串中的数字，
// 使用 match 方法返回了匹配到的数字字符串数组 ["1"]。
let str = '123345555555'
str = str.replace(/(\d{3})\d{5}(\d{3})/g,'$1*****$2')
console.log(str);
// 正则分组匹配，难重点，学会省很多事情
// 正则表达式的分组匹配使用圆括号 () 来定义一个分组。在这个例子中，
// 正则表达式 (\d{3})\d{5}(\d{3}) 包含了两个分组。

// 第一个分组 (\d{3}) 匹配连续的三个数字。
// \d{5} 匹配连续的五个数字。
// 第二个分组 (\d{3}) 匹配连续的三个数字。
// 通过在替换字符串中使用 $1 和 $2，可以引用这两个分组的匹配结果
// 在这个例子中，'$1*****$2' 是替换字符串，其中 $1 代表第一个分组的匹配结果，
// $2 代表第二个分组的匹配结果。

// 所以，这个正则表达式的作用是匹配一个字符串中的特定模式，并将匹配到的部分替换为
//  $1*****$2 的形式，其中 ***** 是一个占位符，表示在替换时保留原始字符串中的一
//  部分内容。
// $&
// 在不用任何分组时候正则匹配到的目标是$&,相当于是函数中的match