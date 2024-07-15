// 经典双指针

function reverseString(s) {
    let j = s.length - 1
    for (let i = 0;i < j ; i++) {
        const tmp = s[i]
        s[i] = s[j]
        s[j] = tmp
        j--
    }
  return s
}