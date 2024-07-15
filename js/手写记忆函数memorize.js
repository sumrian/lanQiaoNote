function memorize(fn) {
    // TODO: 在这里写入具体的实现逻辑
    // 如果再次传入相同的参数，则直接返回已经存储好的计算结果
    // 否则，重新调用传入的 fn 函数，并将其参数和结果存储起来
    // 可以存储多组结果
    let obj = {}
    return (...arg) => {
      return obj[arg] = obj[arg] || obj[arg] == 0 ? 0 :fn(...arg)
    }
  }

//   考虑返回函数的入参里面可能有多函数用剩余参数接受比较稳妥