function isValid (s) {
    const rule = {
      '(':')',
      '[':']',
      '{':'}',
    } 
    let stack = []
    let keys = Object.keys(rule)
    for (let i = 0 ;i < s.length; i++) {
      if (keys.includes(s[i])) {
          stack.push(s[i])
      } else {
          if (rule[stack.pop()] !== s[i]) return false
      }
    }
    return stack.length == 0
  }