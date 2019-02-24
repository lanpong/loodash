/**
 * 根据 precision（精度） 向下舍入 number
 * @param {Number} number 
 * @param {Number} precision 
 * @returns {Number}
 * @example
 * floor(4.006)
 * // => 4
 * floor(0.046, 2)
 * // => 0.04
 * floor(4060, -2)
 * // => 4000
 */
function floor(number, precision=0) {
    let temp = Math.pow(10, precision);
    return Math.floor(number * temp) / temp;
}
