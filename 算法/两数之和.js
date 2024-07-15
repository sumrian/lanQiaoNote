// 哈希表解法
const map = new Map()
for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]; // 计算目标值与当前元素之差
    if (map.has(complement)) {
        return [map.get(complement), i]; // 返回两个元素的索引
    }
    map.set(nums[i], i); // 将当前元素及其索引存入哈希表
}   