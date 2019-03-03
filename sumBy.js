import iteratee from './iteratee.js'

/**
 * 这个方法类似 .summin 除了它接受 iteratee 来调用 array中的每一个元素，
 * 来生成其值排序的标准。itera 会调用1个参数: (value)
 * @param {Array} array 
 * @param {Function} itera 
 * @returns {*}
 * @example
 * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }]
 * 
 * sumBy(objects, function(o) { return o.n; })
 * // => 20
 * 
 * sumBy(objects, 'n')
 * // => 20
 */
function sumBy(array, itera) {
    let func = iteratee(itera);
    let result = 0;
    for (let item of array) {
        result += func(item);
    }
    return result;
}

export default sumBy;
