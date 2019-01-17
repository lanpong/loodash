/**
 * 使用 value 值来填充（替换） array，从start位置开始, 
 * 到 end 位置结束（但不包含end位置）。
 * Note: 这个方法会改变 array
 * @param {Array} array 
 * @param {*} value 
 * @param {Number} start 
 * @param {Number} end 
 * @returns {Array}
 * @example
 * var array = [1, 2, 3]
 * fill(array, 'a')
 * // => ["a", "a", "a"]
 * console.log(array)
 * // => ["a", "a", "a"]
 * 
 * fill(Array(3), 2)
 * // => [2, 2, 2]
 * 
 * fill([4, 6, 8, 10], '*', 1, 3)
 * // => [4, "*", "*", 10]
 * 
 * fill([4, 6, 8, 10], '*', 1)
 * // => [4, "*", "*", "*"]
 * 
 * fill([4, 6, 8, 10], '*')
 * // => ["*", "*", "*", "*"]
 * 
 * fill([4, 6, 8, 10], '*', 5)
 * // => [4, 6, 8, 10]
 */
function fill(array, value, start, end) {
    let length = array ? array.length : 0;

    if (!length) {
        return [];
    }
    if (!start || typeof start != 'number') {
        start = 0;
    }
    if (!end || typeof end != 'number') {
        end = length;
    }

    for (let i=start; i<end; i++) {
        array[i] = value;
    }
    return array;
}
