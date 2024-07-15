const groupByAge = (peoples) => {
    // TODO:待补充代码，按照年龄进行分组
    const result = {}
    peoples.forEach(item => {
        //Object.keys(result)是一个字符串数组
      if (Object.keys(result).includes(String(item.age))) {
        result[item.age].push(item)
        // console.log(0,result);
      } else {
        result[item.age] = []
        result[item.age].push(item)
        // console.log(1,result);
      }
      // console.log(result);
    })
    return result
  };
  //牛人写法
//   const groupByAge = (peoples) => {
//     // TODO:待补充代码，按照年龄进行分组
//     const obj = {}
//     peoples.forEach(item => obj[item.age] = peoples.filter(value => value.age === item.age))
//     return obj
//   };
  console.log(groupByAge( [
    { name: "杰克", age: 1 },
    { name: "丽莎", age: 2 },
    { name: "艾娃", age: 5 },
    { name: "约翰", age: 1 },
    { name: "豪尔赫", age: 2 },
  ]));