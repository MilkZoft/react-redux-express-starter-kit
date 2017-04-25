/**
 * @module lib/utils/frontend
 */

// Utils
import { isDefined } from './is';
import { forEach } from './object';

/**
 * Return just the attributes with values
 *
 * @param {object} props Props
 * @returns {object} newProps
 */
export function attrs(props) {
  const newProps = {};

  forEach(props, prop => {
    if (prop) {
      newProps[prop] = props[prop];
    }
  });

  return newProps;
}

/**
 * Gets a new state
 *
 * @param {object} state State
 * @param {object} newState New State
 * @returns {object} New State
 */
export function getNewState(state, newState) {
  return Object.assign({}, state, newState);
}

/**
 * Returns true if is the first render
 *
 * @param {array} items Items
 * @returns {boolean} True if is first render
 * @memberof module:lib/utils/frontend
 */
export function isFirstRender(items) {
  return items && items.length === 0 || !isDefined(items);
}

/**
 * Loads an image depending on the theme path
 *
 * @param {string} imagePath Path of the image
 * @returns {string} Image path with theme
 */
export function loadImage(imagePath) {
  return `frontend/images/${imagePath}`;
}

/**
 * Redirects to a specific url
 *
 * @param {string} url URL
 * @returns {void}
 */
export function redirectTo(url = '/') {
  return window.location.href = url;
}

/**
 * Sets a css class depends on condition
 *
 * @param {boolean} condition Condition
 * @param {string} className1 First class
 * @param {string} className2 Second class
 * @returns {string} Corresponding className
 */
export function setClass(condition, className1, className2) {
  return condition ? className1 : className2 ? className2 : '';
}
