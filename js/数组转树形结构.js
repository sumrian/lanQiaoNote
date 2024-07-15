function convertToTree(regions, rootId = "0") {
    // TODO: 在这里写入具体的实现逻辑
    // 将平铺的结构转化为树状结构，并将 rootId 下的所有子节点数组返回
    // 如果不存在 rootId 下的子节点，则返回一个空数组
    let arr = {}
    let result = []
    regions = regions.map(i => {
      return{
        ...i,
        children:[]
      }
    })
    regions.forEach(item => {
      arr[item.pid] = regions.filter(val => {
        
        return val.pid == item.pid
      })
    })
    regions.forEach(item => {
      item.children = arr[item.id] || []
    })
    result.push(regions.find(item => item.pid == rootId))
    console.log(result);
    // console.log(arr);
    return result
  }
// pro代码
//   function convertToTree(regions, rootId = "0") {
//     return regions.filter(item =>item.pid == rootId).map(item => (item.children = convertToTree(regions,item.id),item))
//   }

// 递归原理
// let resArr=[]
// regions.forEach(element => {
//   if(element.pid==rootId){
//     resArr.push(element)
//     element.children=convertToTree(regions,element.id)
    
//   }
// });
// return resArr