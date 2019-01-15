/**
 * 创建一个具有唯一 array 值的数组，每个值不包含在其他给定的数组中。
 * （即创建一个新数组，这个数组中的值，为第一个数字（array 参数）排除了给定数组中的值。）
 * 该方法使用 SameValueZero做相等比较。结果值的顺序是由第一个数组中的顺序确定。
 * @param {Array} array 
 * @param  {...Array} values 
 * @returns {Array}
 * @example
 * difference([2, 1], [2, 3]);
 * // => [1]
 */
function difference(array, ...values) {
    let result = [];
    let temp = [].concat(...values);
    for (let i=0; i<array.length; i++) {
        if(!temp.includes(array[i])) {
            result.push(array[i]);
        }
    }
    return result;
}
