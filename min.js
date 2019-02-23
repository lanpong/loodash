/**
 * 计算 array 中的最小值。 
 * 如果 array 是空的或者假值将会返回 undefined
 * @param {Array} array 
 * @returns {*}
 * @example
 * max([4, 2, 8, 6])
 * // => 2
 */
function min(array) {
    return (array && array.length) ? array.sort((a, b) => a - b)[0] : undefined;
}
