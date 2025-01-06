let nu = 322352
console.log(nu.toLocaleString());// 输出：322,352
// 推荐使用Intl.NumberFormat()api，js提供的现代化方法
console.log(new Intl.NumberFormat().format(12321432123432));