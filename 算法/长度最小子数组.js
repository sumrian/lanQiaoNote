// 修改为连续的子数组，其中大于等于改成等于

function minSubArrayLen (target, nums) {
    let stack = []
    let lengthArr = []
  for (let i = 0;i < nums.length; i++) {
    if (nums[i] <= target) {
        stack.push(nums[i]) 
        while (stack.reduce((pre,cur) => pre + cur,0) > target) {
            stack.shift()
        }
        if (stack.reduce((pre,cur) => pre + cur,0) == target) {
            lengthArr.push(stack.length)
            
            
        }
        
    }
  }
  if (Math.min(...lengthArr) !== Infinity) return Math.min(...lengthArr)
  return 0
}