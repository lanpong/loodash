/**
 * 根据 separator 拆分字符串 string
 * @param {string} [string=''] 
 * @param {RegExp|string} separator 
 * @param {Number} [limit] 
 * @returns {Array}
 * @example
 * split('a-b-c', '-', 2);
 * // => ["a", "b"]
 */
function split(string, separator, limit) {
    return string.split(separator, limit);
}
