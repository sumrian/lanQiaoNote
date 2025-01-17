function randomNumber() {
    let probabilities = [0.1, 0.3, 0.6, 1.0];
    let num = Math.random();
    return probabilities.findIndex((v) => num <= v);
}
//调整probabilities数组来改变概率分布，用数轴区间划分概率