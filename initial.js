/**
 * 获取数组 array 中除了最后一个元素之外的所有元素
 * @param {Array} array 
 * @returns {Array}
 * @example
 * initial([1, 2, 3])
 * // => [1, 2]
 */
function initial(array) {
    let length = array ? array.length : 0;
    return length ? array.slice(0, length-1) : undefined;
}
