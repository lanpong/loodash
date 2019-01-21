/**
 * 将 array 中的所有元素转换为由 separator 分隔的字符串
 * @param {Array} array 
 * @param {string} separator 
 * @returns {string}
 * @example
 * join(['a', 'b', 'c'], '~')
 * // => "a~b~c"
 */
function join(array, separator) {
    return array == null ? '' : Array.prototype.join.call(array, separator);
}
