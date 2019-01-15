/**
 * 创建一个去重后的 array 数组副本。
 * @param {Array} array 
 * @returns {Array}
 * @example
 * uniq([2, 1, 2]);
 * // => [2, 1]
 */
function uniq(array) {
    let result = [];
    for (let i=0; i<array.length; i++) {
        if (!result.includes(array[i])) {
            result.push(array[i]);
        }
    }
    return result;
}
