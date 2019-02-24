/**
 * 计算 array 中值的总和
 * @param {Array} array 
 * @returns {number}
 * @example
 * sum([4, 2, 8, 6])
 * // => 20
 */
function sum(array) {
    let result = 0;
    if (array && array.length) {
        for (let i = 0; i < array.length; i++) {
            result += array[i];
        }
    }
    return result;
}
