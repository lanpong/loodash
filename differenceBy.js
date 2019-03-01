/**
 * 这个方法类似 .difference ，除了它接受一个 iteratee（迭代器），
 * 调用 array 和 values 中的每个元素以产生比较的标准。 结果值是从第一数组中选择。
 * iteratee 会调用一个参数：(value)。（首先使用迭代器分别迭代 array 和 values 中的每个元素，返回的值作为比较值）。
 * @param {Array} array 要检查的数组
 * @param {...Array} values 排除的值
 * @param {Function} iteratee 迭代的条件
 * @returns {Array} 返回一个过滤后的新数组
 * @example
 * differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
 * // => [1.2]
 */
function differenceBy(array, ...values) {

}
    