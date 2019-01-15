/**
 * arrays (数组)的并集，按顺序返回，返回数组的元素是唯一的
 * @param {...Array} [arrays] 
 * @returns {Array}
 * @example
 * union([1, 2], [2, 3])
 * // => [1, 2, 3]
 * union([2, 3], [1, 2])
 * // => [2, 3, 1]
 */
function union(...arrays) {
    let temp = [].concat(...arrays);
    let result = [];
    for (let i=0; i<temp.length; i++) {
        if (!result.includes(temp[i])) {
            result.push(temp[i]);
        }
    }
    return result;
}
