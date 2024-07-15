const promisefy = (fn) => {
    // TODO 此处完成该函数的封装
    
    return (...args) => {
      return new Promise((res,rej) => {
        fn(...args,(err,contrast) => {
          if(err) rej(err)
          else res(contrast)
        })
    }) 
    }
  
  }