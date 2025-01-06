let i = 0
let id = null
const log = () => {
  console.log(i++);
  setTimeout(() => {
    console.log('定时器执行：' + i);
    
  },0)
  
  id = requestAnimationFrame(log)
  if (i === 100) {
    cancelAnimationFrame(id)
  }
  
  
}
log()