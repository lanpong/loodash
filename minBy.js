/**
 * 这个方法类似 .min 除了它接受 iteratee 来调用 array中的每一个元素，
 * 来生成其值排序的标准。 iteratee 会调用1个参数: (value)
 * @param {Array} array 
 * @param {Function} iteratee 
 * @returns {*}
 * @example
 * var objects = [{'n': 1}, {'n': 2}]
 * 
 * minBy(objects, function(o) {return o.n;})
 * // => {'n': 1}
 * 
 * minBy(objects, 'n')
 * // => {'n': 1}
 */
function minBy(array, iteratee) {

}
