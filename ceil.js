/**
 * 根据 precision（精度） 向上舍入 number
 * @param {number} number 要向上舍入的值
 * @param {number} [precision=0] 向上舍入的的精度
 * @returns {number} 返回向上舍入的值
 * @example
 * ceil(4.006)
 * // => 5
 * 
 * ceil(6.004, 2)
 * // => 6.01
 * 
 * ceil(6040, -2)
 * // => 6100
 */
function ceil(number, precision=0) {
    let temp = Math.pow(10, precision);
    return Math.ceil(number * temp) / temp;
}
