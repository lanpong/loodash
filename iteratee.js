import property from './property.js'
import matchesProperty from './matchesProperty.js'
import matches from './matches.js'
import isFunction from './isFunction.js'

/**
 * 创建一个函数，通过创建函数的参数调用 func 函数。
 * 如果 func 是一个属性名，传入包含这个属性名的对象，回调返回对应属性名的值。
 * 如果 func 是一个对象，传入的元素有相同的对象属性，回调返回 true。其他情况返回 false
 * @param {*} func 转换成 callback 的值
 * @returns {Function} 返回回调函数 callback
 */
function iteratee (func = identity) {
    if (typeof func === 'string') {
        return property(func);
    } else if (Array.isArray(func)) {
        return matchesProperty(func);
    } else if (typeof func === 'object') {
        return matches(func);
    }
    return func;
}

export default iteratee;
