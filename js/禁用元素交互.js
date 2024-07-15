// TODO：请补充代码
function startGame() {
    document.querySelector('.btn').style.display = 'none'
    Array.from(document.querySelectorAll('img')).forEach(item => {
        item.style.display = 'block'
        
    })
    let arr = []
    let score = 0
     setTimeout(() => {
        Array.from(document.querySelectorAll('img')).forEach(item => {
            item.style.display = 'none'
            
        })
        Array.from(document.querySelectorAll('.img-box')).forEach(item => {
            item.addEventListener('click' ,(e) => {
                e.target. querySelector('img').style.display = 'block'
                // console.log(e.target. querySelector('img').src);
                if (arr.length < 2) {
                    arr.push(e)
                }
                if (arr.length == 2) {
                    console.log(1);
                    if (arr[0].target. querySelector('img').src == arr[1].target. querySelector('img').src){
                        console.log(2);
                        arr[0].target.style.opacity = '0'
                        arr[0].target.style.pointerEvents = 'none'
                        arr[1].target.style.opacity = '0'
                        arr[1].target.style.pointerEvents = 'none'
                        score += 2
                    } else  {
                        score -= 2
                        arr[0].target. querySelector('img').style.display = 'none'
                        arr[1].target. querySelector('img').style.display = 'none'
                    }
                    document.querySelector('#score').innerHTML = `${score}`
                    arr = []
                }
                
            })
        })
    },500)

}
