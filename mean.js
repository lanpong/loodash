/**
 * 计算 array 的平均值
 * @param {Array} array 
 * @returns {number}
 * @example
 * mean([4, 2, 8, 6])
 * // => 5
 */
function mean(array) {
    return array.reduce((a, b) => a + b) / array.length;
}
