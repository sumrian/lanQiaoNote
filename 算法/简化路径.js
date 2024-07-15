function simplifyPath (path) {
    let stack = []
    path.split('/').filter(v => v && v !== '.').forEach(i =>{
      i === '..' ? stack.pop() : stack.push(i)
    })
    return '/' + stack.join('/')
  }
  
  function simplifyPath(path) {
    return '/' + path.split('/').reduce((a, v) => (v && v != '.' && (v == '..' ? a.pop() : a.push(v)), a), []).join('/')
}