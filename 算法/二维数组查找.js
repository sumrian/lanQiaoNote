// 遍历后转布尔值
function findNumberIn2DArray (matrix, target) {
    return Boolean(matrix.find(item => item.includes(target)))
}
// 数组api解法
function findNumberIn2DArray (matrix, target) {
    return matrix.flat().some(m => m === target)
}

return matrix.flat().includes(target)
