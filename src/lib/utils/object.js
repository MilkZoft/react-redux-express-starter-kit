// Utils
import { isArray, isDefined, isObject } from './is';

/**
 * Returns true if a key exists in a given array or object
 *
 * @param {string} key Key
 * @param {object} items Object
 * @returns {boolean} True if exists
 */
export function exists(key, items) {
  if (!isObject(items)) {
    return false;
  }

  if (isArray(items)) {
    return items.indexOf(key) !== -1;
  }

  return keys(items).indexOf(key) !== -1;
}

/**
 * Performs a forEach for Arrays or Objects
 *
 * @param {*} items Object || Array
 * @param {function} callback Callback
 * @returns {boolean} True if exists
 */
export function forEach(items, callback) {
  if (isDefined(items) && isDefined(items[0]) && isDefined(items[0].Field) || isArray(items)) {
    return items.forEach(callback);
  } else if (!isDefined(items)) {
    return false;
  }

  return keys(items).forEach(callback);
}

/**
 * Returns the object keys in an array
 *
 * @param {object} items Object
 * @returns {array} Keys in array
 */
export function keys(items) {
  return isObject(items) ? Object.keys(items) : false;
}

/**
 * Parses a given JSon string
 *
 * @param {string} str JSon String
 * @returns {object} JSON Object
 */
export function parseJson(str) {
  return JSON.parse(str);
}

/**
 * Stringify && Parse an Object
 *
 * @param {object} obj Object
 * @returns {object} Parsed JSON
 */
export function parseObject(obj) {
  return parseJson(stringify(obj));
}

/**
 * Return a string from a given JSon
 *
 * @param {object} json JSon Object
 * @returns {string} JSon
 */
export function stringify(json) {
  return JSON.stringify(json);
}

/**
 * Validates a ternary condition
 *
 * @param {boolean} condition Ternary condition
 * @param {*} value1 First value
 * @param {*} value2 Second value
 * @returns {*} value1 || value2
 */
export function ternary(condition, value1, value2) {
  if (!isDefined(value2)) {
    value2 = '';
  }

  return condition ? value1 : value2;
}
