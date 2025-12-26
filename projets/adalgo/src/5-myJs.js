/**
 * This function re-implement the behavior of the .includes() array method
 * without using any existing functions.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
 *
 * @param {string[]} array
 * @param {string} searchElement
 * @returns {boolean}
 * @example
 *      myIncludes(['un', 'deux', 'trois'], 'trois'); // returns true
 *      myIncludes(['un', 'deux', 'trois'], 'quatre'); // returns false
 */
export const myIncludes = (array, searchElement) => {};

/**
 * This function re-implement the behavior of the .indexOf() array method
 * without using any existing functions.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
 *
 * @param {string[]} array
 * @param {string} searchElement
 * @returns {number}
 * @example
 *      myIndexOf(['un', 'deux', 'trois'], 'trois'); // returns 3
 *      myIndexOf(['un', 'deux', 'trois'], 'trois'); // returns -1
 */
export const myIndexOf = (array, searchElement) => {};

/**
 * This function re-implements the behavior of the .startsWith() string method
 * without using any existing string helper functions.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
 *
 * @param {string} str - The full string to test.
 * @param {string} search - The substring to check for at the start.
 * @returns {boolean} True if the string starts with the given substring, false otherwise.
 * @example
 *      myStartsWith('bonjour', 'bon'); // returns true
 *      myStartsWith('bonjour', 'jour'); // returns false
 */
export const myStartsWith = () => {};

/**
 * This function re-implements the behavior of the .repeat() string method
 * without using any existing string helper functions.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
 *
 * @param {string} str - The string to repeat.
 * @param {number} count - The number of times the string should be repeated.
 * @returns {string} The string repeated 'count' times.
 * @example
 *      myRepeat('ha', 3); // returns 'hahaha'
 *      myRepeat('x', 0); // returns ''
 */
export const myRepeat = () => {};

/**
 * This function re-implements the behavior of the .join() array method
 * without using any existing array helper functions.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
 *
 * @param {any[]} array - The array whose elements will be joined.
 * @param {string} separator - The separator to insert between elements.
 * @returns {string} A string made by concatenating all array items separated by the given string.
 * @example
 *      myJoin(['a', 'b', 'c'], '-'); // returns 'a-b-c'
 *      myJoin(['hello', 'world'], ' '); // returns 'hello world'
 */
export const myJoin = () => {};

/**
 * This function re-implements the behavior of Object.keys()
 * without using Object.keys() or any built-in reflection helpers.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
 *
 * @param {Object} obj - The object from which to extract keys.
 * @returns {string[]} An array of the object's own enumerable property names.
 * @example
 *      myObjectKeys({a: 1, b: 2}); // returns ['a', 'b']
 */
export const myObjectKeys = () => {};

/**
 * This function re-implements the behavior of Object.entries()
 * without using Object.entries() or any built-in reflection helpers.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
 *
 * @param {Object} obj - The object from which to extract key/value pairs.
 * @returns {Array[]} An array of [key, value] pairs from the object's own enumerable properties.
 * @example
 *      myObjectEntries({a: 1, b: 2});
 *      // returns [['a', 1], ['b', 2]]
 */
export const myObjectEntries = () => {};
