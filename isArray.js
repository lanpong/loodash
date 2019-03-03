/**
 * 检查 value 是否是 Array 类对象
 * @param {*} value 要检查的值
 * @returns {boolean} 如果value是一个数组返回 true，否则返回 false
 * @example
 * isArray([1, 2, 3])
 * // => true
 * 
 * isArray(document.body.children)
 * // => false
 * 
 * isArray('abc')
 * // => false
 */
function isArray(value) {
    return Object.prototype.toString.call(value) === '[object Array]';
}

export default isArray;
