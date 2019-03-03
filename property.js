/**
 * 创建一个返回给定对象的 path 的值的函数
 * @param {Array|string} path 要得到值的属性路径
 * @returns {Function} 返回新的函数
 */
function property(path) {
    return function (obj) {
        return obj[path];
    }
}

export default property;
