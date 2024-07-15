// 解法一
function removeStrDuplicates (s) {
    for(let i = 0; i < s.length; i++) {
      if(s[i] == s[i + 1]) {
          // 截取字符串，注意边界，用splice也可以，习惯用slice了
          s = s.slice(0, i) + s.slice(i + 2)
          i = -1  // 相等了，i要重新赋值为-1，这样下次循环会 i++ 为0
      }
    }
    return s
  }

  // 解法二
function removeStrDuplicates (s) {
    // 利用栈解题
    let stack = []
    for(const c of s) {
      c === stack[stack.length - 1] ? stack.pop() : stack.push(c)
    }
    return stack.join('')
  }