function moveZeroes(nums) {
    return nums.sort((a,b) => !a - !b)
      
  }

//   利用布尔值来进行排序，0转化为false，1转化为true，然后利用sort方法来进行排序，最后再转化为数字
//   同理前置0可以用  return nums.sort((a,b) => !b - !a)