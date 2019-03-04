(function() {
    function runInContext(content) {

        /*---------------------------Array---------------------------*/

        /**
         * 将数组（array）拆分成多个 size 长度的区块，并将这些区块组成一个新数组。
         * 如果 array 无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块。
         * @category Array
         * @param {Array} array 需要处理的数组
         * @param {number} [size=1] 每个数组区块的长度
         * @returns {Array} 返回一个包含拆分区块的新数组
         * @example
         * _.chunk([1, 2, 3, 4], 2)
         * // => [[1, 2], [3, 4]]
         * 
         * _.chunk([1, 2, 3, 4], 3)
         * // => [[1, 2, 3], [4]]
         * 
         * _.chunk([1, 2, 3, 4])
         * // => [[1], [2], [3], [4]]
         */
        function chunk(array, size=1) {
            let result = [];
            for (var i = 0; i < array.length; i = i + size) {
                result.push(array.slice(i, i + size));
            }
            return result;
        }

        /**
        * 创建一个删除了所有 false 值的数组。
        * false，null，0，“”，undefined 和 NaN 的值都是 false
        * @category Array
        * @param {Array} array 待处理的数组
        * @returns {Array} 返回过滤掉假值的新数组
        * @example
        *
        * _.compact([0, 1, false, 2, '', 3]);
        * // => [1, 2, 3]
        */
        function compact(array) {
            var i = 0;
            const result = [];

            if (array == null) {
                return result;
            }
            for (var value of array) {
                if (value) {
                    result[i++] = value;
                }
            }

            return result;
        }

        /**
        * 创建一个新数组，将 array 与任何数组或值连接在一起
        * @category Array
        * @param {Array} array 被连接的数组
        * @param {...*} [values] 连接的值
        * @returns {Array} 返回连接后的新数组
        * @example
        *
        * var array = [1];
        * var other = _.concat(array, 2, [3], [[4]]);
        *
        * console.log(other);
        * // => [1, 2, 3, [4]]
        *
        * console.log(array);
        * // => [1]
        */
        function concat() {
            var length = arguments.length;

            if (!length) {
                return [];
            }

            var result = [];
            for (var i = 0; i < length; i++) {
                if (Array.isArray(arguments[i])) {
                    result.push(...arguments[i]);
                } else {
                    result.push(arguments[i]);
                }
            }

            return result;
        }

        /**
        * 创建一个具有唯一array值的数组，每个值不包含在其他给定的数组中。
        * @category Array
        * @param {Array} array 要检查的数组
        * @param {...Array} [values] 排除的值
        * @returns {Array} 返回一个过滤值后的新数组
        * @example
        *
        * _.difference([3, 2, 1], [4, 2]);
        * // => [3, 1]
        */
        function difference(array, ...values) {
            var result = [];
            var temp = [].concat(...values);

            for (var i = 0; i < array.length; i++) {
                if (!temp.includes(array[i])) {
                    result.push(array[i]);
                }
            }

            return result;
        }

        /**
        * 
        * @category Array
        * @param {Array} array 
        * @param {...Array} [values] 
        * @param {Array|Function|Object|string} [iteratee=_.identity].
        * @returns {Array} 
        * @example
        *
        * _.differenceBy([3.1, 2.2, 1.3], [4.4, 2.5], Math.floor);
        * // => [3.1, 1.3]
        *
        * // The `_.property` iteratee shorthand.
        * _.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x');
        * // => [{ 'x': 2 }]
        */
        function differenceBy() {

        }

        /**
        * 
        * @category Array
        * @param {Array} array 
        * @param {...Array} [values] 
        * @param {Function} [comparator] 
        * @returns {Array} 
        * @example
        *
        * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
        *
        * _.differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual);
        * // => [{ 'x': 2, 'y': 1 }]
        */
        function differenceWith() {

        }

        /**
        *创建一个切片数组，去除 array 前面的 n 个元素。(n默认值为1)
        * @category Array
        * @param {Array} array 要查询的数组
        * @param {number} [n=1] 要去除的元素个数
        * @returns {Array} 返回 array 剩余切片
        * @example
        *
        * _.drop([1, 2, 3]);
        * // => [2, 3]
        *
        * _.drop([1, 2, 3], 2);
        * // => [3]
        *
        * _.drop([1, 2, 3], 5);
        * // => []
        *
        * _.drop([1, 2, 3], 0);
        * // => [1, 2, 3]
        */
        function drop(array, n=1) {
            var index = 0,
                result = [];

            for (var i = n; i < array.length; i++) {
                result[index++] = array[i];
            }

            return result;
        }

        /**
         * 创建一个切片数组，去除 array 尾部的 n 个元素。n 默认值为 1。
        * @category Array
        * @param {Array} array 要查询的数组
        * @param {number} [n=1] 要去除的元素个数
        * @returns {Array} 返回array剩余切片
        * @example
        *
        * _.dropRight([1, 2, 3]);
        * // => [1, 2]
        *
        * _.dropRight([1, 2, 3], 2);
        * // => [1]
        *
        * _.dropRight([1, 2, 3], 5);
        * // => []
        *
        * _.dropRight([1, 2, 3], 0);
        * // => [1, 2, 3]
        */
        function dropRight(array, n=1) {
            var result = [],
            index = 0;

            for (var i = 0; i < array.length - n; i++) {
                result[index++] = array[i];
            }

            return result;
        }

        /**
        * 
        * @category Array
        * @param {Array} array 
        * @param {Array|Function|Object|string} [predicate=_.identity]
        * @returns {Array} 
        * @example
        *
        * var users = [
        *   { 'user': 'barney',  'active': true },
        *   { 'user': 'fred',    'active': false },
        *   { 'user': 'pebbles', 'active': false }
        * ];
        *
        * _.dropRightWhile(users, function(o) { return !o.active; });
        * // => objects for ['barney']
        *
        * // The `_.matches` iteratee shorthand.
        * _.dropRightWhile(users, { 'user': 'pebbles', 'active': false });
        * // => objects for ['barney', 'fred']
        *
        * // The `_.matchesProperty` iteratee shorthand.
        * _.dropRightWhile(users, ['active', false]);
        * // => objects for ['barney']
        *
        * // The `_.property` iteratee shorthand.
        * _.dropRightWhile(users, 'active');
        * // => objects for ['barney', 'fred', 'pebbles']
        */
        function dropRightWhile() {

        }

        /**
        * 
        * @category Array
        * @param {Array} array The array to query.
        * @param {Array|Function|Object|string} [predicate=_.identity]
        * @returns {Array} Returns the slice of `array`.
        * @example
        *
        * var users = [
        *   { 'user': 'barney',  'active': false },
        *   { 'user': 'fred',    'active': false },
        *   { 'user': 'pebbles', 'active': true }
        * ];
        *
        * _.dropWhile(users, function(o) { return !o.active; });
        * // => objects for ['pebbles']
        *
        * // The `_.matches` iteratee shorthand.
        * _.dropWhile(users, { 'user': 'barney', 'active': false });
        * // => objects for ['fred', 'pebbles']
        *
        * // The `_.matchesProperty` iteratee shorthand.
        * _.dropWhile(users, ['active', false]);
        * // => objects for ['pebbles']
        *
        * // The `_.property` iteratee shorthand.
        * _.dropWhile(users, 'active');
        * // => objects for ['barney', 'fred', 'pebbles']
        */
        function dropWhile() {

        }

        /**
        * 使用 value 值来填充（替换） array，从 start 位置开始, 到 end 位置结束（但不包含 end 位置）。
        * Note: 这个方法会改变 array
        * @category Array
        * @param {Array} array 要填充改变的数组
        * @param {*} value 填充给 `array` 的值
        * @param {number} [start=0] 开始位置（默认0）1
        * @param {number} [end=array.length] 结束位置（默认array.length）
        * @returns {Array} 返回 `array`
        * @example
        *
        * var array = [1, 2, 3];
        *
        * _.fill(array, 'a');
        * console.log(array);
        * // => ['a', 'a', 'a']
        *
        * _.fill(Array(3), 2);
        * // => [2, 2, 2]
        *
        * _.fill([4, 6, 8, 10], '*', 1, 3);
        * // => [4, '*', '*', 10]
        */
        function fill(array, value, start, end) {
            var length = array ? array.length : 0;

            if (!length) {
                return [];
            }
            if (!start || typeof start != 'number') {
                start = 0;
            }
            if (!end || typeof end != 'number') {
                end = 0;
            }

            for (var i = start; i < end; i++) {
                array[i] = value;
            }

            return array;
        }

        /**
        * 
        * @category Array
        * @param {Array} array The array to search.
        * @param {Array|Function|Object|string} [predicate=_.identity]
        *  The function invoked per iteration.
        * @returns {number} Returns the index of the found element, else `-1`.
        * @example
        *
        * var users = [
        *   { 'user': 'barney',  'active': false },
        *   { 'user': 'fred',    'active': false },
        *   { 'user': 'pebbles', 'active': true }
        * ];
        *
        * _.findIndex(users, function(o) { return o.user == 'barney'; });
        * // => 0
        *
        * // The `_.matches` iteratee shorthand.
        * _.findIndex(users, { 'user': 'fred', 'active': false });
        * // => 1
        *
        * // The `_.matchesProperty` iteratee shorthand.
        * _.findIndex(users, ['active', false]);
        * // => 0
        *
        * // The `_.property` iteratee shorthand.
        * _.findIndex(users, 'active');
        * // => 2
        */
        function findIndex() {

        }

        /**
        * 
        * @category Array
        * @param {Array} array The array to search.
        * @param {Array|Function|Object|string} [predicate=_.identity]
        *  The function invoked per iteration.
        * @returns {number} Returns the index of the found element, else `-1`.
        * @example
        *
        * var users = [
        *   { 'user': 'barney',  'active': true },
        *   { 'user': 'fred',    'active': false },
        *   { 'user': 'pebbles', 'active': false }
        * ];
        *
        * _.findLastIndex(users, function(o) { return o.user == 'pebbles'; });
        * // => 2
        *
        * // The `_.matches` iteratee shorthand.
        * _.findLastIndex(users, { 'user': 'barney', 'active': true });
        * // => 0
        *
        * // The `_.matchesProperty` iteratee shorthand.
        * _.findLastIndex(users, ['active', false]);
        * // => 2
        *
        * // The `_.property` iteratee shorthand.
        * _.findLastIndex(users, 'active');
        * // => 0
        */
        function findLastIndex() {

        }

        /**
        * 
        * @category Array
        * @param {Array} array The array to flatten.
        * @returns {Array} Returns the new flattened array.
        * @example
        *
        * _.flatten([1, [2, [3, [4]], 5]]);
        * // => [1, 2, [3, [4]], 5]
        */
        function flatten(array) {
        
        }

        /**
        * 
        * @category Array
        * @param {Array} array The array to flatten.
        * @returns {Array} Returns the new flattened array.
        * @example
        *
        * _.flattenDeep([1, [2, [3, [4]], 5]]);
        * // => [1, 2, 3, 4, 5]
        */
        function flattenDeep() {

        }

        /**
        * 
        * @category Array
        * @param {Array} array The array to flatten.
        * @param {number} [depth=1] The maximum recursion depth.
        * @returns {Array} Returns the new flattened array.
        * @example
        *
        * var array = [1, [2, [3, [4]], 5]];
        *
        * _.flattenDepth(array, 1);
        * // => [1, 2, [3, [4]], 5]
        *
        * _.flattenDepth(array, 2);
        * // => [1, 2, 3, [4], 5]
        */
        function flattenDepth() {

        }

        /**
        * 
        * @category Array
        * @param {Array} pairs The key-value pairs.
        * @returns {Object} Returns the new object.
        * @example
        *
        * _.fromPairs([['fred', 30], ['barney', 40]]);
        * // => { 'fred': 30, 'barney': 40 }
        */
        function fromPairs() {

        }

        /**
        * 获取数组 array 的第一个元素
        * @category Array
        * @param {Array} array 要查询的数组
        * @returns {*} 返回数组 `array` 的第一个元素
        * @example
        *
        * _.head([1, 2, 3]);
        * // => 1
        *
        * _.head([]);
        * // => undefined
        */
        function head(array) {
            return array ? array[0] : undefined;
        }

        /**
        * @category Array
        * @param {Array} array The array to search.
        * @param {*} value The value to search for.
        * @param {number} [fromIndex=0] The index to search from.
        * @returns {number} Returns the index of the matched value, else `-1`.
        * @example
        *
        * _.indexOf([1, 2, 1, 2], 2);
        * // => 1
        *
        * // Search from the `fromIndex`.
        * _.indexOf([1, 2, 1, 2], 2, 2);
        * // => 3
        */
        function indexOf() {

        }

        /**
        * 
        * @category Array
        * @param {Array} array The array to query.
        * @returns {Array} Returns the slice of `array`.
        * @example
        *
        * _.initial([1, 2, 3]);
        * // => [1, 2]
        */
        function initial(array) {
            return dropRight(array, 1);
        }

        /**
        * 
        * @category Array
        * @param {...Array} [arrays] The arrays to inspect.
        * @returns {Array} Returns the new array of intersecting values.
        * @example
        *
        * _.intersection([2, 1], [4, 2], [1, 2]);
        * // => [2]
        */
        function intersection() {

        }

        /**
        * 
        * @category Array
        * @param {...Array} [arrays] The arrays to inspect.
        * @param {Array|Function|Object|string} [iteratee=_.identity]
        *  The iteratee invoked per element.
        * @returns {Array} Returns the new array of intersecting values.
        * @example
        *
        * _.intersectionBy([2.1, 1.2], [4.3, 2.4], Math.floor);
        * // => [2.1]
        *
        * // The `_.property` iteratee shorthand.
        * _.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
        * // => [{ 'x': 1 }]
        */
        function intersectionBy() {

        }

        /**
        * 
        * @category Array
        * @param {...Array} [arrays] The arrays to inspect.
        * @param {Function} [comparator] The comparator invoked per element.
        * @returns {Array} Returns the new array of intersecting values.
        * @example
        *
        * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
        * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
        *
        * _.intersectionWith(objects, others, _.isEqual);
        * // => [{ 'x': 1, 'y': 2 }]
        */
        function intersectionWith() {

        }

        /**
        * 
        * @category Array
        * @param {Array} array The array to convert.
        * @param {string} [separator=','] The element separator.
        * @returns {string} Returns the joined string.
        * @example
        *
        * _.join(['a', 'b', 'c'], '~');
        * // => 'a~b~c'
        */
        function join(array, separator) {

        }

        /**
        * 
        * @category Array
        * @param {Array} array The array to query.
        * @returns {*} Returns the last element of `array`.
        * @example
        *
        * _.last([1, 2, 3]);
        * // => 3
        */
        function last(array) {
            var length = array ? array.length : 0;
            return length ? array[length - 1] : undefined;
        }

        /**
        * 
        * @category Array
        * @param {Array} array The array to search.
        * @param {*} value The value to search for.
        * @param {number} [fromIndex=array.length-1] The index to search from.
        * @returns {number} Returns the index of the matched value, else `-1`.
        * @example
        *
        * _.lastIndexOf([1, 2, 1, 2], 2);
        * // => 3
        *
        * // Search from the `fromIndex`.
        * _.lastIndexOf([1, 2, 1, 2], 2, 2);
        * // => 1
        */
        function lastIndexOf() {

        }

        /**
        * 
        * @category Array
        * @param {Array} array The array to modify.
        * @param {...*} [values] The values to remove.
        * @returns {Array} Returns `array`.
        * @example
        *
        * var array = [1, 2, 3, 1, 2, 3];
        *
        * _.pull(array, 2, 3);
        * console.log(array);
        * // => [1, 1]
        */
        function pull(array, values) {

        }

        /**
        * 
        * @category Array
        * @param {Array} array The array to modify.
        * @param {Array} values The values to remove.
        * @returns {Array} Returns `array`.
        * @example
        *
        * var array = [1, 2, 3, 1, 2, 3];
        *
        * _.pullAll(array, [2, 3]);
        * console.log(array);
        * // => [1, 1]
        */
        function pullAll() {

        }

        /**
        * 
        * @category Array
        * @param {Array} array The array to modify.
        * @param {Array} values The values to remove.
        * @param {Array|Function|Object|string} [iteratee=_.identity]
        *  The iteratee invoked per element.
        * @returns {Array} Returns `array`.
        * @example
        *
        * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
        *
        * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
        * console.log(array);
        * // => [{ 'x': 2 }]
        */
        function pullAllBy() {

        }

        /**
        * 
        * @category Array
        * @param {Array} array The array to modify.
        * @param {Array} values The values to remove.
        * @param {Function} [comparator] The comparator invoked per element.
        * @returns {Array} Returns `array`.
        * @example
        *
        * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
        *
        * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
        * console.log(array);
        * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
        */
        function pullAllWith() {

        }

        /**
        * 
        * @category Array
        * @param {Array} array The array to modify.
        * @param {...(number|number[])} [indexes] The indexes of elements to remove,
        *  specified individually or in arrays.
        * @returns {Array} Returns the new array of removed elements.
        * @example
        *
        * var array = [5, 10, 15, 20];
        * var evens = _.pullAt(array, 1, 3);
        *
        * console.log(array);
        * // => [5, 15]
        *
        * console.log(evens);
        * // => [10, 20]
        */
        function pullAt() {

        }

        /**
        * 
        * @category Array
        * @param {Array} array The array to modify.
        * @param {Array|Function|Object|string} [predicate=_.identity]
        *  The function invoked per iteration.
        * @returns {Array} Returns the new array of removed elements.
        * @example
        *
        * var array = [1, 2, 3, 4];
        * var evens = _.remove(array, function(n) {
        *   return n % 2 == 0;
        * });
        *
        * console.log(array);
        * // => [1, 3]
        *
        * console.log(evens);
        * // => [2, 4]
        */
        function remove() {

        }

        /**
        * 反转 array，使得第一个元素变为最后一个元素，第二个元素变为倒数第二个元素，依次类推。
        * Note: 这个方法会改变原数组 array
        * @category Array
        * @param {Array} array 要修改的数组
        * @returns {Array} 返回 `array`
        * @example
        *
        * var array = [1, 2, 3];
        *
        * _.reverse(array);
        * // => [3, 2, 1]
        *
        * console.log(array);
        * // => [3, 2, 1]
        */
        function reverse(array) {
            var length = array.length;
            var halfLength = Math.floor(length / 2);

            if (length === 0) {
                return [];
            }
            for (var i = 0; i < halfLength; i++) {
                var temp = array[i];
                array[i] = array[length-i-1];
                array[length-i-1] = temp;
            }

            return array;
        }

        /**
        * 裁剪数组 array，从 start 位置开始到end结束，但不包括 end 本身的位置。
        * @category Array
        * @param {Array} array 要裁剪数组
        * @param {number} [start=0] 开始位置
        * @param {number} [end=array.length] 结束位置
        * @returns {Array} 返回数组 `array` 裁剪部分的新数组
        */
        function slice(array, start, end) {
            var length = array.length;

            if (length === 0) {
                return [];
            }

            if (end >= length) {
                end = length;
            }
            var result = [];
            for (var i = start; i < end; i++) {
                result.push(array[i]);
            }

            return result;
        }

        /**
        * 
        * @category Array
        * @param {Array} array The sorted array to inspect.
        * @param {*} value The value to evaluate.
        * @returns {number} Returns the index at which `value` should be inserted
        *  into `array`.
        * @example
        *
        * _.sortedIndex([30, 50], 40);
        * // => 1
        *
        * _.sortedIndex([4, 5], 4);
        * // => 0
        */
        function sortedIndex() {

        }

        /**
        * 
        * @category Array
        * @param {Array} array The sorted array to inspect.
        * @param {*} value The value to evaluate.
        * @param {Array|Function|Object|string} [iteratee=_.identity]
        *  The iteratee invoked per element.
        * @returns {number} Returns the index at which `value` should be inserted
        *  into `array`.
        * @example
        *
        * var dict = { 'thirty': 30, 'forty': 40, 'fifty': 50 };
        *
        * _.sortedIndexBy(['thirty', 'fifty'], 'forty', _.propertyOf(dict));
        * // => 1
        *
        * // The `_.property` iteratee shorthand.
        * _.sortedIndexBy([{ 'x': 4 }, { 'x': 5 }], { 'x': 4 }, 'x');
        * // => 0
        */
        function sortedIndexBy() {

        }

        /**
        * 
        * @category Array
        * @param {Array} array The array to search.
        * @param {*} value The value to search for.
        * @returns {number} Returns the index of the matched value, else `-1`.
        * @example
        *
        * _.sortedIndexOf([1, 1, 2, 2], 2);
        * // => 2
        */
        function sortedIndexOf() {

        }

        /**
        * 
        * @category Array
        * @param {Array} array The sorted array to inspect.
        * @param {*} value The value to evaluate.
        * @returns {number} Returns the index at which `value` should be inserted
        *  into `array`.
        * @example
        *
        * _.sortedLastIndex([4, 5], 4);
        * // => 1
        */
        function sortedLastIndex() {

        }

        /**
        * 
        * @category Array
        * @param {Array} array The sorted array to inspect.
        * @param {*} value The value to evaluate.
        * @param {Array|Function|Object|string} [iteratee=_.identity]
        *  The iteratee invoked per element.
        * @returns {number} Returns the index at which `value` should be inserted
        *  into `array`.
        * @example
        *
        * // The `_.property` iteratee shorthand.
        * _.sortedLastIndexBy([{ 'x': 4 }, { 'x': 5 }], { 'x': 4 }, 'x');
        * // => 1
        */
        function sortedLastIndexBy() {

        }

        /**
        * 
        * @category Array
        * @param {Array} array The array to search.
        * @param {*} value The value to search for.
        * @returns {number} Returns the index of the matched value, else `-1`.
        * @example
        *
        * _.sortedLastIndexOf([1, 1, 2, 2], 2);
        * // => 3
        */
        function sortedLastIndexOf() {

        }

        /**
        * 
        * @category Array
        * @param {Array} array The array to inspect.
        * @returns {Array} Returns the new duplicate free array.
        * @example
        *
        * _.sortedUniq([1, 1, 2]);
        * // => [1, 2]
        */
        function sortedUniq() {

        }

        /**
        * 
        * @category Array
        * @param {Array} array The array to inspect.
        * @param {Function} [iteratee] The iteratee invoked per element.
        * @returns {Array} Returns the new duplicate free array.
        * @example
        *
        * _.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor);
        * // => [1.1, 2.3]
        */
        function sortedUniqBy() {

        }

        /**
        * 
        * @category Array
        * @param {Array} array The array to query.
        * @returns {Array} Returns the slice of `array`.
        * @example
        *
        * _.tail([1, 2, 3]);
        * // => [2, 3]
        */
        function tail(array) {
            return drop(array, 1);
        }

        /**
        * 创建一个数组切片，从 array 数组的起始元素开始提取 n 个元素
        * @category Array
        * @param {Array} array 要检索的数组
        * @param {number} [n=1] 需要提取元素的个数
        * @returns {Array} 返回 `array` 数组的切片（从起始元素开始n个元素）
        * @example
        *
        * _.take([1, 2, 3]);
        * // => [1]
        *
        * _.take([1, 2, 3], 2);
        * // => [1, 2]
        *
        * _.take([1, 2, 3], 5);
        * // => [1, 2, 3]
        *
        * _.take([1, 2, 3], 0);
        * // => []
        */
        function take(array, n=1) {
            var result = [];

            if (n >= array.length) {
                n = array.length;
            }
            for (var i = 0; i < n; i++) {
                result.push(array[i]);
            }

            return result;
        }

        /**
        * 
        * @category Array
        * @param {Array} array The array to query.
        * @param {number} [n=1] The number of elements to take.
        * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
        * @returns {Array} Returns the slice of `array`.
        * @example
        *
        * _.takeRight([1, 2, 3]);
        * // => [3]
        *
        * _.takeRight([1, 2, 3], 2);
        * // => [2, 3]
        *
        * _.takeRight([1, 2, 3], 5);
        * // => [1, 2, 3]
        *
        * _.takeRight([1, 2, 3], 0);
        * // => []
        */
        function takeRight() {

        }

        /**
        * 
        * @category Array
        * @param {Array} array The array to query.
        * @param {Array|Function|Object|string} [predicate=_.identity]
        *  The function invoked per iteration.
        * @returns {Array} Returns the slice of `array`.
        * @example
        *
        * var users = [
        *   { 'user': 'barney',  'active': true },
        *   { 'user': 'fred',    'active': false },
        *   { 'user': 'pebbles', 'active': false }
        * ];
        *
        * _.takeRightWhile(users, function(o) { return !o.active; });
        * // => objects for ['fred', 'pebbles']
        *
        * // The `_.matches` iteratee shorthand.
        * _.takeRightWhile(users, { 'user': 'pebbles', 'active': false });
        * // => objects for ['pebbles']
        *
        * // The `_.matchesProperty` iteratee shorthand.
        * _.takeRightWhile(users, ['active', false]);
        * // => objects for ['fred', 'pebbles']
        *
        * // The `_.property` iteratee shorthand.
        * _.takeRightWhile(users, 'active');
        * // => []
        */
        function takeRightWhile() {

        }

        /**
        * 
        * @category Array
        * @param {Array} array The array to query.
        * @param {Array|Function|Object|string} [predicate=_.identity]
        *  The function invoked per iteration.
        * @returns {Array} Returns the slice of `array`.
        * @example
        *
        * var users = [
        *   { 'user': 'barney',  'active': false },
        *   { 'user': 'fred',    'active': false},
        *   { 'user': 'pebbles', 'active': true }
        * ];
        *
        * _.takeWhile(users, function(o) { return !o.active; });
        * // => objects for ['barney', 'fred']
        *
        * // The `_.matches` iteratee shorthand.
        * _.takeWhile(users, { 'user': 'barney', 'active': false });
        * // => objects for ['barney']
        *
        * // The `_.matchesProperty` iteratee shorthand.
        * _.takeWhile(users, ['active', false]);
        * // => objects for ['barney', 'fred']
        *
        * // The `_.property` iteratee shorthand.
        * _.takeWhile(users, 'active');
        * // => []
        */
        function takeWhile() {

        }

        /**
        * arrays (数组)的并集，按顺序返回，返回数组的元素是唯一的
        * @category Array
        * @param {...Array} [arrays] 要检查的数组
        * @returns {Array} 返回一个新的联合数组
        * @example
        *
        * _.union([2, 1], [4, 2], [1, 2]);
        * // => [2, 1, 4]
        */
        function union(...arrays) {
            var temp = [].concat(...arrays);
            var result = [];

            for (var i = 0; i < temp.length; i++) {
                if (!result.includes(temp[i])) {
                    result.push(temp[i]);
                }
            }

            return result;
        }

        /**
        * 
        * @category Array
        * @param {...Array} [arrays] The arrays to inspect.
        * @param {Array|Function|Object|string} [iteratee=_.identity]
        *  The iteratee invoked per element.
        * @returns {Array} Returns the new array of combined values.
        * @example
        *
        * _.unionBy([2.1, 1.2], [4.3, 2.4], Math.floor);
        * // => [2.1, 1.2, 4.3]
        *
        * // The `_.property` iteratee shorthand.
        * _.unionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
        * // => [{ 'x': 1 }, { 'x': 2 }]
        */
        function unionBy() {

        }

        /**
        * 
        * @category Array
        * @param {...Array} [arrays] The arrays to inspect.
        * @param {Function} [comparator] The comparator invoked per element.
        * @returns {Array} Returns the new array of combined values.
        * @example
        *
        * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
        * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
        *
        * _.unionWith(objects, others, _.isEqual);
        * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
        */
        function unionWith() {

        }

        /**
        * 
        * @category Array
        * @param {Array} array The array to inspect.
        * @returns {Array} Returns the new duplicate free array.
        * @example
        *
        * _.uniq([2, 1, 2]);
        * // => [2, 1]
        */
        function uniq() {

        }

        /**
        * 
        * @category Array
        * @param {Array} array The array to inspect.
        * @param {Array|Function|Object|string} [iteratee=_.identity]
        *  The iteratee invoked per element.
        * @returns {Array} Returns the new duplicate free array.
        * @example
        *
        * _.uniqBy([2.1, 1.2, 2.3], Math.floor);
        * // => [2.1, 1.2]
        *
        * // The `_.property` iteratee shorthand.
        * _.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
        * // => [{ 'x': 1 }, { 'x': 2 }]
        */
        function uniqBy() {

        }

        /**
        * 
        * @category Array
        * @param {Array} array The array to inspect.
        * @param {Function} [comparator] The comparator invoked per element.
        * @returns {Array} Returns the new duplicate free array.
        * @example
        *
        * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 },  { 'x': 1, 'y': 2 }];
        *
        * _.uniqWith(objects, _.isEqual);
        * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
        */
        function uniqWith() {

        }

        /**
        * 
        * @category Array
        * @param {Array} array The array of grouped elements to process.
        * @returns {Array} Returns the new array of regrouped elements.
        * @example
        *
        * var zipped = _.zip(['fred', 'barney'], [30, 40], [true, false]);
        * // => [['fred', 30, true], ['barney', 40, false]]
        *
        * _.unzip(zipped);
        * // => [['fred', 'barney'], [30, 40], [true, false]]
        */
        function unzip() {

        }

        /**
        * 
        * @category Array
        * @param {Array} array The array of grouped elements to process.
        * @param {Function} [iteratee=_.identity] The function to combine
        *  regrouped values.
        * @returns {Array} Returns the new array of regrouped elements.
        * @example
        *
        * var zipped = _.zip([1, 2], [10, 20], [100, 200]);
        * // => [[1, 10, 100], [2, 20, 200]]
        *
        * _.unzipWith(zipped, _.add);
        * // => [3, 30, 300]
        */
        function unzipWith() {

        }

        /**
        * 
        * @category Array
        * @param {Array} array The array to filter.
        * @param {...*} [values] The values to exclude.
        * @returns {Array} Returns the new array of filtered values.
        * @example
        *
        * _.without([1, 2, 1, 3], 1, 2);
        * // => [3]
        */
        function without() {

        }

        /**
        * 
        * @category Array
        * @param {...Array} [arrays] The arrays to inspect.
        * @returns {Array} Returns the new array of values.
        * @example
        *
        * _.xor([2, 1], [4, 2]);
        * // => [1, 4]
        */
        function xor() {

        }

        /**
        * 
        * @category Array
        * @param {...Array} [arrays] The arrays to inspect.
        * @param {Array|Function|Object|string} [iteratee=_.identity]
        *  The iteratee invoked per element.
        * @returns {Array} Returns the new array of values.
        * @example
        *
        * _.xorBy([2.1, 1.2], [4.3, 2.4], Math.floor);
        * // => [1.2, 4.3]
        *
        * // The `_.property` iteratee shorthand.
        * _.xorBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
        * // => [{ 'x': 2 }]
        */
        function xorBy() {

        }

        /**
        * 
        * @category Array
        * @param {...Array} [arrays] The arrays to inspect.
        * @param {Function} [comparator] The comparator invoked per element.
        * @returns {Array} Returns the new array of values.
        * @example
        *
        * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
        * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
        *
        * _.xorWith(objects, others, _.isEqual);
        * // => [{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
        */
        function xorWith() {

        }

        /**
        * 
        * @category Array
        * @param {...Array} [arrays] The arrays to process.
        * @returns {Array} Returns the new array of grouped elements.
        * @example
        *
        * _.zip(['fred', 'barney'], [30, 40], [true, false]);
        * // => [['fred', 30, true], ['barney', 40, false]]
        */
        function zip() {

        }

        /**
        * 
        * @category Array
        * @param {Array} [props=[]] The property identifiers.
        * @param {Array} [values=[]] The property values.
        * @returns {Object} Returns the new object.
        * @example
        *
        * _.zipObject(['a', 'b'], [1, 2]);
        * // => { 'a': 1, 'b': 2 }
        */
        function zipObject() {

        }

        /**
        * 
        * @category Array
        * @param {Array} [props=[]] The property identifiers.
        * @param {Array} [values=[]] The property values.
        * @returns {Object} Returns the new object.
        * @example
        *
        * _.zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2]);
        * // => { 'a': { 'b': [{ 'c': 1 }, { 'd': 2 }] } }
        */
        function zipObjectDeep() {

        }

        /**
        * 
        * @category Array
        * @param {...Array} [arrays] The arrays to process.
        * @param {Function} [iteratee=_.identity] The function to combine grouped values.
        * @returns {Array} Returns the new array of grouped elements.
        * @example
        *
        * _.zipWith([1, 2], [10, 20], [100, 200], function(a, b, c) {
        *   return a + b + c;
        * });
        * // => [111, 222]
        */
        function zipWith() {

        }



        /*---------------------------Collection---------------------------*/


        /*---------------------------Date---------------------------*/


        /*---------------------------Function---------------------------*/


        /*---------------------------Lang---------------------------*/


        /*---------------------------Math---------------------------*/


        /*---------------------------Number---------------------------*/


        /*---------------------------Object---------------------------*/


        /*---------------------------Seq---------------------------*/


        /*---------------------------String---------------------------*/


        /*---------------------------Util---------------------------*/


        /*---------------------------Properties---------------------------*/


        /*---------------------------Methods---------------------------*/
    }

    var _ = runInContext();
}.call(this));