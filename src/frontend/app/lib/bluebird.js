import Bluebird from 'bluebird';

// Bluebird configuration
window.Promise = Bluebird;
Bluebird.config({ warnings: false });

window.addEventListener('unhandledrejection', error => {
  if (process.env.NODE_ENV === 'production') {
    error.preventDefault();
  } else {
    error.preventDefault();
    console.warn('Unhandled promise rejection warning.', error.detail); // eslint-disable-line no-console
  }
});
