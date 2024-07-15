if (regions[0].name === regionName) {
    return [regionName]
}
regions[0].children.forEach(item => {
    if (item.name === regionName) {
        return [regions[0].name, regionName]
    }
})
for (let i = 0; i < regions[0].children.length; i++) {
    if (regions[0].children[i].name === regionName) {
        return [regions[0].name, regionName]
    }
    for (let j = 0; j < regions[0].children[i].children.length; j++) {
        if (regions[0].children[i].children[j].name === regionName) {
            return [regions[0].name, regions[0].children[i].name, regionName]
        }
    }
}
return null

let going = true
let walker = (regions, regionName) => {
    regions.forEach(item => {
        if (!going) return
        stack.push(item['name'])
        if (item['name'] === regionName) {
            going = false
        } else if (item['children']) {
            walker(item['children'], regionName)
        } else {
            stack.pop()
        }
    })
    if (going) stack.pop()
}
walker(regions, regionName)
return stack.length ? stack : null

function findRegion(regions, regionName) {
    // TODO: 在这里写入具体的实现逻辑
    // 需要从树状结构的行政信息中，遍历找到目标区域的行政信息，如输入：成都市，返回 [四川省，成都市]
    // 如果所输入的位置信息不存在，则返回 null
    let result = null
    regions.forEach(v => {
      let res = findRegion(v.children,regionName)
      if(res) {
        result = [v.name,...res]
      } else if (v.name === regionName) {
        result = [v.name]
      }
    })
    return result
  }