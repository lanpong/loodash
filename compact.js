/**
 * 创建一个删除了所有 false 值的数组。false，null，0，“”，undefined 和 NaN 的值都是 false
 * @param {Array} array 
 * @returns {Array}
 * @example
 * compact([0, 1, false, 2, '', 3])
 * // => [1, 2, 3]
 */
function compact(array) {
    let i = 0;
    const result = [];

    if (array == null) {
        return result;
    }
    for (let value of array) {
        if (value) {
            result[i++] = value;
        }
    }
    return result;
}
