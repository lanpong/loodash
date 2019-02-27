/**
 * 创建一个数组切片，从 array 数组的起始元素开始提取 n 个元素
 * @param {Array} array 要检索的数组
 * @param {number} n 需要提取元素的个数
 * @returns {Array} 返回 array 数组的切片（从起始元素开始n个元素）
 * @example
 * take([1, 2, 3])
 * // => [1]
 * 
 * take([1, 2, 3], 2)
 * // => [1, 2]
 * 
 * take([1, 2, 3], 5)
 * // => [1, 2, 3]
 * 
 * take([1, 2, 3], 0)
 * // => []
 */
function take(array, n=1) {
    let result = [];
    if (n >= array.length) {
        n = array.length;
    }
    for (let i=0; i<n; i++) {
        result.push(array[i]);
    }
    return result;
}
