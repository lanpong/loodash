/**
 * 检查 value 是否是一个类 arguments 对象
 * @param {*} value 要检查的值
 * @returns {boolean} 如果 value 是一个 arguments 对象返回 true，否则返回 false
 * @example
 * isArguments(function() {return arguments;}())
 * // => true
 * 
 * isArguments([1, 2, 3])
 * // => false
 */
function isArguments(value) {
    return Object.prototype.toString.call(value) === '[object Arguments]';
}

export default isArguments;
