let name="张三",age="18";
let desc="${name} 今年  ${age}  岁了";
function replace(desc){
    ///\$\{([^}]+)\}/g匹配所有 ${}里面内容
    return desc.replace(/\$\{([^}]+)\}/g,function(mathed,key){
        return eval(key);
    })
}