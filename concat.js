/**
 * 创建一个新数组，将 array 与任何数组或值连接在一起。
 * @param {Array} array 
 * @param {...*} [values] 
 * @returns {Array}
 * @example
 * var array = [1];
 * var a = concat(array, 2, [3], [[4]]);
 * console.log(a);
 * // => [1, 2, 3, [4]]
 */
function concat() {
    let length = arguments.length;

    if (!length) {
        return [];
    }

    let result = [];
    for (let i=0; i<length; i++) {
        if (Array.isArray(arguments[i])) {
            result.push(...arguments[i]);
        } else {
            result.push(arguments[i]);
        }
    }
    return result;
}
