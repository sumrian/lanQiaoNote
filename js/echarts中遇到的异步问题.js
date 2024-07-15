const converData = (obj) => {
    let list = []
    
    let wheat = ["小麦"]
    let soybean = ["大豆"]
    let potato = ["马铃薯"]
    let corn = ["玉米"]
    for (let key in obj) {
      wheat.push(obj[key].wheat)
      soybean.push(obj[key].soybean)
      potato.push(obj[key].potato)
      corn.push(obj[key].corn)
    }
    list.push(["全部",...Object.keys(obj)],wheat,soybean,potato,corn)
    // console.log(list);
    return list
  }
  const getData = async () => {
    const res = await axios.get('./data.json')
    // console.log(res.data.data);
    option.dataset.source = converData(res.data.data)
    // console.log( option.dataset.source);
  }
  getData()//通过await发现渲染有问题不能及时渲染option.dataset.source
  //第二次再里面又发现可以渲染，以后碰到问题多试试await和.then转换用
  axios.get('./data.json').then((res) => {
      option.dataset.source = converData(res.data.data)
      myChart.setOption(option);
    })
  myChart.setOption(option);
  console.log( option.dataset.source);