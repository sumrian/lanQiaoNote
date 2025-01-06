let i = 0
let id = null
const log = () => {
  console.log(i++);
  setTimeout(() => {
    console.log('定时器执行：' + i);
     
  },0)
  if (i === 100) {
    return
  } 
  requestIdleCallback(log)//避免使用requestIdleCallback，速度慢，而且不稳定
//   详细参照https://developer.mozilla.org/zh-CN/docs/Web/API/Background_Tasks_API
  // requestAnimationFrame(log)
  
  
  
}
log()