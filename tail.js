/**
 * 获取除了 array 数组第一个元素以外的全部元素。
 * @param {Array} array 
 * @returns {Array}
 * @example
 * tail([1, 2, 3])
 * // => [2, 3]
 */
function tail(array) {
    let length = array ? array.length : 0;
    return length ? array.slice(1, length) : undefined;
}
