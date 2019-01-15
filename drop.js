/**
 * 创建一个切片数组，去除 array 前面的 n 个元素。(n默认值为1)
 * @param {Array} array 
 * @param {Number} n 
 * @example
 * drop([1, 2, 3]);
 * // => [2, 3]
 * drop([1, 2, 3], 2);
 * // => [3]
 * drop([1, 2, 3], 5);
 * // => []
 * drop([1, 2, 3], 0);
 * // => [1, 2, 3]
 */
function drop(array, n=1) {
    let index = 0,
        result = [];
    for (let i=n; i<array.length; i++) {
        result[index++] = array[i];
    }
    return result;
}
