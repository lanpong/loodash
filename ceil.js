/**
 * 根据 precision（精度） 向上舍入 number
 * @param {number} number 
 * @param {number} [precision=0] 
 * @returns {number}
 * @example
 * ceil(4.006)
 * // => 5
 * ceil(6.004, 2)
 * // => 6.01
 * ceil(6040, -2)
 * // => 6100
 */
function ceil(number, precision=0) {
    let temp = Math.pow(10, precision);
    return Math.ceil(number * temp) / temp;
}
