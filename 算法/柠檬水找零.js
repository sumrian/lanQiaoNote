function lemonadeChange(bills) {
    const m = {
      five :0,
      ten :0,
      twoTen :0,
    }  
    let flag = true
    for (let i = 0; i < bills.length; i++) {
      if (bills[i] === 5) m.five++
      else if (bills[i] === 10) {
        if (m.five) {
          m.five--
          m.ten++
        } else {
          flag = false
        }
        
      } else {
        if (m.five >= 3) {
          m.five -= 3
          m.twoTen++
        } else if (m.five && m.ten) {
          m.twoTen++
          m.five--
          m.ten--
        } else {
          flag = false
        }
      }
    }
    return flag
    // 补充代码
  }

//   优质代码思想
// 大量的判断与同逻辑可以封装函数
function lemonadeChange(bills) {
    const o = { 5: 0, 10: 0, 20: 0 }, f = { 5: _ => _, 10: _ => o[5]--, 20: _ => o[10]-- && o[5]-- || (o[5] -= 3) >= 0 }
    return bills.every(x => f[x](++o[x]))
  }