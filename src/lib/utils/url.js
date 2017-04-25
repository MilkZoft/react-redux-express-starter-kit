// Configuration
import { $app } from '../config';

// Utils
import { isDefined, isString } from './is';
import { exists } from './object';

/**
 * Return the current app
 *
 * @param {string} url URL
 * @param {boolean} dashboard Dashboard
 * @returns {string} Current App
 */
export function getCurrentApp(url, dashboard) {
  const urlParams = getParamsFromUrl(url);
  const allowedApps = $app().allowed;
  const currentApp = urlParams[0];

  return exists(currentApp, allowedApps) ? currentApp : $app().default;
}

/**
 * Return all the params from the url (splits slashes)
 *
 * @param {string} url Url Params with slashes (/es/blog/post-title)
 * @param {number} index Get specific param
 * @returns {array} Params as array
 */
export function getParamsFromUrl(url, index = false) {
  if (url === true) {
    url = getLocation().pathname;
  }

  if (isString(url)) {
    const params = url.split('/');
    params.shift();

    if (index) {
      return isDefined(params[index]) ? params[index] : false;
    }

    return params;
  }

  return false;
}

/**
 * Return a value from param
 *
 * @param {string} param Param
 * @param {string} type Type
 * @returns {string} Value
 */
export function getValueFromParam(param, type = 'string') {
  const value = param.replace('/', '');

  if (type === 'number') {
    return Number(value);
  }

  return value;
}

/**
 * Return the location
 *
 * @returns {object} window.location
 */
export function getLocation() {
  return isDefined(window) ? window.location : false;
}

/**
 * Return the current app
 *
 * @returns {string} app
 */
export function getCurrentFrontendApp() {
  const { pathname } = getLocation();

  return getCurrentApp(pathname);
}
