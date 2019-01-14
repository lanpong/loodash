/**
 * 裁剪数组 array，从 start 位置开始到 end 结束，但不包括 end 本身的位置。
 * @param {Array} array 
 * @param {Number} start 
 * @param {Number} end 
 */
function slice(array, start, end) {
    let length = array.length;
    if (length === 0) {
        return [];
    }
    
    if (end >= length) {
        end = length;
    }
    let result = [];
    for (let i=start; i<end; i++) {
        result.push(array[i]);
    }
    return result;
}
