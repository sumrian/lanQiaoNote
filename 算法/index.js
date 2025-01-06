const express = require('express')
const app = express()

app.get('/api/sse',(req,res)=>{
    res.writeHead(200, {'Content-Type': 'text/event-stream'})
    const arr = [1,2,3,4,5,6,7,8,9,10]
    let cur = 0
    const timer = setInterval(() => {
        if (cur < arr.length) {
            res.write(arr[cur])
            cur++
        } else {
            clearInterval(timer)
        }
    },300)
})


app.listen(3000)

