/**
 * 反转 array，使得第一个元素变为最后一个元素，第二个元素变为倒数第二个元素，依次类推。
 * Note: 这个方法会改变原数组 array
 * @param {Array} array 
 * @returns {Array}
 * @example
 * var array = [1, 2, 3];
 * reverse(array);
 * // => [3, 2, 1]
 * console.log();
 * // => [3, 2, 1]
 */
function reverse(array) {
    let length = array.length;
    let halfLength = Math.floor(length/2)
    if (length === 0) return [];
    for (let i=0; i<halfLength; i++) {
        var temp = array[i];
        array[i] = array[length-i-1];
        array[length-i-1] = temp;
    }
    return array;
}
