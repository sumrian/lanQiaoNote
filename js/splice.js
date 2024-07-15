//对一个长数组进行平均分配方法
let data = [1,2,3,4,5,6,7,8,9,10]
let weekY = []
while(data.length) {
    weekY.push(eval(data.splice(0,2).join('+')))
}

console.log(weekY);