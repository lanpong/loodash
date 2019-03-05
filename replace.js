/**
 * 替换 string 字符串中匹配的 pattern 为给定的 replacement
 * @param {string} [string='']
 * @param {RegExp|string} pattern
 * @param {Function|string} replacement
 * @returns {string}
 * @example
 * replace('Hi Fred', 'Fred', 'Barney');
 * // => 'Hi Barney'
 */
function replace() {
    var args = arguments;
    var string = args[0].toString();

    return args.length < 3 ? string : string.replace(args[1], args[2]);
}
