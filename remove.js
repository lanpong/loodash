/**
 * 移除数组中predicate（断言）返回为真值的所有元素，并返回移除元素组成的数组。
 * predicate（断言） 会传入3个参数： (value, index, array)。
 * @param {Array} array 
 * @param {Function} predicate 
 * @returns {Array}
 * @example
 * var array = [1, 2, 3, 4];
 * var evens = remove(array, function(n) {
 *     return n % 2 == 0;
 * });
 * 
 * console.log(array);
 * // => [1, 3]
 * 
 * console.log(evens);
 * // => [2, 4]
 */
function remove(array, predicate) {
    let result = [];
    if (!(array && array.length)) {
        return result;
    }

    let index = -1,
        indexes = [],
        length = array.length;

    while (++index < length) {
        var value = array[index];
        if (predicate(value, index, array)) {
            result.push(value);
            indexes.unshift(index);
        }
    }
    for (let i of indexes) {
        array.splice(i, 1);
    }
    return result;
}
