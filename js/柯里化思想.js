function mentalMethod(...args) {
    return (...arg1) =>  !arg1.length ?
      `战胜${args.splice(0,3).join(',')}` ://splice用来控制返回数量
       mentalMethod(...args,...arg1)//重点在没有空参就一直返回带参函数

    // TODO 待补充代码
}
