const toDesensitization = (str, rule, symbol = "*", dealPhone = true) => {
    if(!str) return null;
    if(!rule) return str
    let result = {
        "ids":[],
        "newStr":''
    }
    if(dealPhone) str = str.replace(/(\d{3})\d{5}(\d{3})/g,'$1*****$2')
    rule = new RegExp (Array.isArray(rule) ? rule.join('|') : rule,'g')
    result.newStr = str.replace(rule,((match,offset)=>{
        //第一个参数match表示匹配到的字符串
        //第二个参数表示匹配到的索引
        result.ids.push(offset)
        return symbol.repeat(match.length)
    }))
    // rule.forEach((item)=>{
    //     let reg=new RegExp(item,'g');
    //     let res=str.matchAll(reg);
    //     for (const key of res) {
    //         ids.push(key['index'])也能实现效果
    //     }
    return result 
  };
//   replace() 方法的第二个参数如果是一个函数,那么这个函数可以接受以下几个参数:

// match: 匹配到的字符串。
// p1, p2, ..., pn: 如果正则表达式中有捕获组,那么这些参数就是对应捕获组匹配到的子字符串。
// offset: 匹配到的字符串在原始字符串中的索引位置。
// string: 原始的字符串。