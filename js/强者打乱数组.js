function generatePassword(lower, upper, number, symbol, length) {
    //判断一下密码要求除length外是否全部为false
    if ([...arguments].slice(0, -1).every((v) => !v) || (length<4||length>20)){
      alert('参数不符合要求！！')
      return "";
    }
    let r = ''
    const rand = (str) => str.split('')[Math.random()*str.length|0]
    //利用排序打乱数组太牛了
    const shuffle = (str) => str.split('').sort((a,b)=> Math.random()-0.5).join('')
    while(r.length<length){
      if(lower) r+=rand('qwertyuiopasdfghjklzxcvbnm')
      if(upper) r+=rand('QWERTYUIOPASDFGHJKLZXCVBNM')
      if(number) r+=rand('1234567890')
      if(symbol) r+= rand('!@#$%^&*(){}[]=<>/,.')
    }
    return shuffle(shuffle(r.slice(0,length))) //调用两次打乱,结果更随机
  }