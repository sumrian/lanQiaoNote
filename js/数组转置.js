let arr =  [
    ["start", 1, 2, 3, 4],
    [5, 6, 7, 8, 9],
    [10, 11, "end", 13, 14],
    [15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24],
  ]
  console.log(arr);
  //逆时针
        arr = arr[0].map((val, index) => arr.map((row) => row[row.length - 1 - index]));
    console.log(arr);
    //顺时针
    arr = arr[0].map((val, index) => arr.map(row => row[index]).reverse());
    
    ["start", 1, 2, 3, 4]
    [4,9,14,19,24]
    [3,8,13,18,23]

    mazePath = (arr) => {
      let result = [];  
  
      while (arr.length) {
        
        result.push(arr[0]); //存第一行
  
        arr = arr.slice(1);
        arr = arr.length && arr[0].map((val, index) => arr.map((row) => row[row.length - 1 - index]));
  
      }
  
      return result.flat(2);
    }