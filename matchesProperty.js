/**
 * 创建一个深比较的方法来比较给定对象的 path 的值是否是 srcValue。
 * 如果是返回 true，否则返回 false
 * @param {Array|string} path 给定对象的属性路径名
 * @param {*} srcValue 要匹配的值
 * @returns {Function} 返回新的函数
 */
function matchesProperty (path, srcValue) {
    let temp = new Object();
    temp[path] = srcValue;

    return function (obj) {
        for (let key in temp) {
            if (obj[key] !== temp[key]) {
                return false
            }
        }
        return true;
    }
}

export default matchesProperty;
