/**
 * 将数组（array）拆分成多个 size 长度的区块，并将这些区块组成一个新数组。
 * 如果 array 无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块。
 * @param {Array} array 
 * @param {Number} size 
 * @returns {Array}
 * @example
 * chunk([1, 2, 3, 4], 2)
 * // => [[1, 2], [3, 4]]
 * chunk([1, 2, 3, 4], 3)
 * // => [[1, 2, 3], [4]]
 * chunk([1, 2, 3, 4])
 * // => [[1], [2], [3], [4]]
 */
function chunk(array, size=1) {
    let result = [];
    for (let i=0; i<array.length; i=i+size) {
        result.push(array.slice(i, i+size));
    }
    return result;
}
