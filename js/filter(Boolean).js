// filter(Boolean) 是一个非常有用的技巧,它可以用来过滤掉数组中的所有"假值"(falsy values)。

// 在 JavaScript 中,以下值被认为是"假值"(falsy):

// false
// 0
// '' (空字符串)
// null
// undefined
// NaN
// 当你使用 filter(Boolean) 时,它会遍历数组中的每个元素,并将"真值"(truthy values)保留下来,而将"假值"过滤掉。

// 例如,假设我们有一个包含一些"假值"的数组:

const arr = [0, 1, '', 'hello', null, undefined, NaN];
// 如果我们直接使用 filter() 方法:

const filteredArr = arr.filter(item => item);
// 那么结果将是:

// [1, 'hello']
// 这是因为只有 1 和 'hello' 被认为是"真值"。

// 而使用 filter(Boolean) 的方式:

// const filteredArr = arr.filter(Boolean);
// 结果将是:

// [1, 'hello']
// 这种方式更加简洁和高效,因为 Boolean 函数本身就可以用来判断一个值是"真值"还是"假值"。

// 总的来说,filter(Boolean) 是一种非常常见和有用的技巧,可以帮助你快速地从数组中过滤掉所有的"假值"。