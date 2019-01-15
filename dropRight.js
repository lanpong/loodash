/**
 * 创建一个切片数组，去除 array 尾部的 n 个元素。(n默认值为1)
 * @param {Array} array 
 * @param {Number} n 
 * @example
 * dropRight([1, 2, 3]);
 * // => [1, 2]
 * dropRight([1, 2, 3], 2);
 * // => [1]
 * dropRight([1, 2, 3], 5);
 * // => []
 * dropRight([1, 2, 3], 0);
 * // => [1, 2, 3]
 */
function dropRight(array, n=1) {
    let result = [],
        index = 0;
    for (let i=0; i<array.length - n; i++) {
        result[index++] = array[i];
    }
    return result;
}
