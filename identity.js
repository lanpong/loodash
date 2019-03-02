/**
 * 这个方法返回首个提供的参数
 * @param {*} value 任何值
 * @returns {*} 返回 value
 * @example
 * var object = { 'a': 1 }
 * 
 * console.log(identity(object) === object)
 * // => true
 */
function identity (value) {
    return value;
}

export default identity;
