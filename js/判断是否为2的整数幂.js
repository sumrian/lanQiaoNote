//判断是否为2的整数幂
function isPowerOfTwo(num) {
    if (num <= 0) {
        return false;
    }
    return (num & (num - 1)) === 0;
    //2的整数幂二进制只存在一个1，减一后唯一0变成0，与运算全1为1
}


// function isPowerOfTwo(num) {
//     if (num <= 0) {
//         return false;
//     }
//     let logResult = Math.log2(num);
//     return logResult === Math.floor(logResult);
        //2为底一定是整数，
// }