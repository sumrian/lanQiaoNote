function evalRPN (tokens) {
    let stack = []
    tokens.forEach (v => {
        if (isNaN(v)) {
            let right = stack.pop()
            let left = stack.pop()
            stack.push(parseInt(eval(left + v + right)))
        } else {
            stack.push(Number(v))
        }
    })
    return stack.pop()
  
}
function evalRPN(tokens) {
    return +tokens.reduce((a, v) => a.concat([isNaN(v) ? ~~eval([a.pop(), a.pop()].reverse().join(v)) : v]), []).pop()
}