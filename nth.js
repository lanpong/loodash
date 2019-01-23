/**
 * 获取 array 数组的第 n 个元素。如果 n 为负数，
 * 则返回从数组结尾开始的第 n 个元素。
 * @param {Array} array 
 * @param {number} n 
 * @returns {*}
 * @example
 * var array = ['a', 'b', 'c', 'd'];
 * nth(array, 1)
 * // => "b"
 * nth(array, -2)
 * // => "c"
 */
function nth(array, n=0) {
    let length = array ? array.length : 0;

    if (!length) {
        return -1;
    }
    if (n >= 0) {
        return array[n]
    }
    if (n < 0) {
        return array[length + n];
    }
}
