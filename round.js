/**
 * 根据 precision（精度）四舍五入 number
 * @param {number} number 
 * @param {number} [precision=0]
 * @returns {number}
 * @example
 * round(4.006)
 * // => 4
 * round(4.006, 2)
 * // => 4.01
 * round(4060, -2)
 * // => 4100
 */
function round(number, precision=0) {
    let temp = Math.pow(10, precision);
    return Math.round(number * temp) / temp;
}
