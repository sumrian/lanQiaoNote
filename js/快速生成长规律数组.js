// 生成一个包含数字 1 到 4 的累加数组
let resultArray = Array.from({ length: 4 }, (_, index) => index + 1);

console.log(resultArray); // 输出 [1, 2, 3, 4]
[...Array(5).keys()].map(v => v+1)
new Array(n).fill(0).map((item,index)=>index+1)
Array.from(Array(n).keys(), i => i + 1)