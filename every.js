/**
 * 通过 predicate（断言函数） 检查 collection（集合）中的所有元素是否都返回真值。
 * 一旦 predicate（断言函数） 返回假值，迭代就马上停止。
 * predicate（断言函数）调用三个参数： (value, index|key, collection)。
 * 注意: 这个方法对于对于空集合返回 true，因为空集合的任何元素都是 true 。
 * @param {Array} array 
 * @param {Function} predicate 
 * @returns {boolean}
 * @example
 * every([true, 1, null, 'yes'], Boolean)
 * // => false
 */
function every(array, predicate) {
    let index = -1;
    let length = array == null ? 0 :array.length;

    while (++index < length) {
        if (!predicate(array[index], index, array)) {
            return false;
        }
    }
    return true;
}
