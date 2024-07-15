const arr = [1, 2, [3, 4], [5, [6, 7]]];
const flattenedArr = arr.flat();
// [...new Set(puzzles.flat())]获取数组中所有不重复元素
console.log(flattenedArr);
// 输出: [1, 2, 3, 4, 5, 6, 7]
// 要注意的是，flat() 方法默认只会扁平化一层嵌套的数组。
// 如果原始数组中存在多层嵌套，可以传递一个可选的参数 depth 
// 来指定扁平化的层数。例如，arr.flat(2) 表示将原始数组扁平化为最多两层的一维数组。