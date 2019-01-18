/**
 * 创建一个切片数组，去除array中从 predicate 返回假值开始到尾部的部分。
 * predicate 会传入3个参数： (value, index, array)。
 * @param {Array} array 
 * @param {Function} predicate 
 * @returns {Array}
 */
function dropRightWhile(array, predicate) {
    let length = array ? array.length : 0;
    if (!length) {
        return [];
    }

    let index = -1,
        length = array.length;

    while (++index < length) {
        var value = array[index];
        if (predicate(value, index, array)) {
            array = array.slice(0, -1);
        }
    }
    return array;
}

// TODO
// 对于解析传入的函数进行判断