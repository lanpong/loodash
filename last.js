/**
 * 获取 array 中的最后一个元素
 * @param {Array} array 
 * @returns {*}
 * @example
 * last([1, 2, 3])
 * // => 3
 */
function last(array) {
    let length = array ? array.length : 0;
    return length ? array[length-1] : undefined;
}