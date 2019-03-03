/**
 * 检查 value 是否是 Function 对象
 * @param {*} value 要检查的值
 * @returns {boolean} 如果 value 是一个函数返回 true，否则返回 false
 * @example
 * isFunction(/abc/)
 * // => false
 * 
 * isFunction(_)
 * // => true
 */
function isFunction(value) {
    return Object.prototype.toString.call(value) === '[object Function]';
}

export default isFunction;
