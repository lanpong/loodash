/**
 * 执行一个深度比较，来确定 object 是否含有和 source 完全相等的属性值
 * @param {Object} object 要检查的对象
 * @param {Object} source 属性值相匹配的对象
 * @returns {boolean} 如果 object 匹配返回 true，不匹配返回 false
 * @example
 * var object = {'a': 1, 'b': 2}
 * // => undefined
 * 
 * isMatch(object, {'b': 2})
 * // => true
 * 
 * isMatch(object, {'b': 1})
 * // => false
 */
function isMatch(object, source) {
    for (let key in source) {
        if (object[key] !== source[key]) {
            return false;
        }
    }
    return true;
}
