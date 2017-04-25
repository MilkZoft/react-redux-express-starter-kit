/**
 * @module lib/config
 */

// Configuration
import defaultConfig from '../config/default.json';
import developmentConfig from '../config/development.json';

// Config container
let config;

/**
 * Returns app node
 *
 * @param {string} env Forcing environment
 * @returns {string} app
 */
export function $app(env) {
  return $config(env).app;
}

/**
 * Returns appName node
 *
 * @param {string} env Forcing environment
 * @returns {string} appName
 */
export function $appName(env) {
  return $config(env).appName;
}

/**
 * Returns baseUrl node
 *
 * @param {string} env Forcing environment
 * @returns {string} baseUrl
 */
export function $baseUrl(env) {
  return $config(env).baseUrl;
}

/**
 * Returns the selected environment configuration
 *
 * @param {string} env Forcing environment
 * @returns {object} Config
 */
export function $config(env) {
  if (!config) {
    config = defaultConfig;

    if (developmentConfig.enableConfig || env === 'development') {
      config = developmentConfig;
    }
  }

  return config;
}

/**
 * Returns html node
 *
 * @param {string} env Forcing environment
 * @returns {object} html
 */
export function $html(env) {
  return $config(env).html;
}

/**
 * Returns serverPort node
 *
 * @param {string} env Forcing environment
 * @returns {number} serverPort
 */
export function $serverPort(env) {
  return $config(env).serverPort;
}

/**
 * Returns views node
 *
 * @param {string} env Forcing environment
 * @returns {object} views
 */
export function $views(env) {
  return $config(env).views;
}

/**
 * Returns webpack node
 *
 * @param {string} env Forcing environment
 * @returns {object} webpack
 */
export function $webpack(env) {
  return $config(env).webpack;
}
