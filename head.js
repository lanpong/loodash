/**
 * 获取数组 array 的第一个元素。
 * @param {Array} array 
 * @returns {*}
 * @example
 * head([1, 2, 3])
 * // => 1
 * head([])
 * // => undefined
 */
function head(array) {
    return (array && array.length) ? array[0]:undefined;
}