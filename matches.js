/**
 * 创建一个深比较的方法来比较给定的对象和 source 对象。
 * 如果给定的对象拥有相同的属性值返回 true，否则返回 false
 * @param {Object} source 要匹配属性值的源对象
 * @returns {Function} 返回新的函数
 */
function matches(source) {
    return function (obj) {
        for (let key in source) {
            if (obj[key] !== source[key]) {
                return false;
            }
        }
        return true;
    }
}
