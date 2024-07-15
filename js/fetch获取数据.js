//和axios很相似，不过他返回一个promise，
//这个promise的成功结果返回另一个promise所以要两次await或者两次.then

const res = await fetch(MockURL)
const data = await res.json()
console.log(data);