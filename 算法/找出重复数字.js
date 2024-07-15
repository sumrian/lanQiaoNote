// 利用set去重后进行删除，如果删除失败证明已经删除了，因为set里面只可能出现一次所以重复了
function findRepeatNumber(nums) {
    const set = new Set(nums)
    return nums.find(x => !set.delete(x))
}

// 对一个元素第一次出现和最后一次出现，如果不是同一个索引证明重复了
for (let num of nums) {
    if (nums.indexOf(num) != nums.lastIndexOf(num)) {
        return num;
    }
}

//使用sort方法先排序，再用for循环遍历判断当前元素和下一元素是否相等
nums.sort();
for (i = 0; i <= nums.length; i++) {
    if (nums[i] == nums[i + 1]) {
        return nums[i];
    }
}
//新增一个“存储空间”，通过遍历数组判断元素是否在“存储空间”里，不在则添加，在则返回
let flag = [];
for (let item of nums) {
    if (flag.indexOf(item) !== -1) {
        return item;
    }
    flag.push(item);
}

let obj = {};
for (let num of nums) {
    obj[num] = obj[num] + 1 || 1;
    if (obj[num] > 1) {
        return num;
    }
}

let numMap = new Map();
for (let i = 0; i < nums.length; i++) {
    if (numMap.has(nums[i])) {
        return nums[i];
    }
    numMap.set(nums[i]);
}


let hash = new Set();
for (let i = 0; i < nums.length; i++) {
    if (hash.has(nums[i])) {
        return nums[i];
    }
    hash.add(nums[i]);
}