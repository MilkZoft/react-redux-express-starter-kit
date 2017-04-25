// Utils
import { isMobile } from '../lib/utils/device';
import { getCurrentApp } from '../lib/utils/url';

// Configuration
import { $baseUrl } from '../lib/config';

// Importing controllers
// import homeController from './app/home/home.controller';

// Imports
import imports from './imports';

export default (app) => {
  // base Url && basePath && currentUrl && currentApp
  app.use((req, res, next) => {
    res.locals.currentApp = res.currentApp = getCurrentApp(req.originalUrl);
    res.locals.currentDashboardApp = res.currentDashboardApp = getCurrentApp(req.originalUrl, true);
    res.locals.currentUrl = res.currentUrl = $baseUrl() + req.originalUrl;
    res.locals.baseUrl = res.baseUrl = $baseUrl();

    return next();
  });

  // Device detector
  app.use((req, res, next) => {
    res.locals.isMobile = isMobile(req.headers['user-agent']);

    return next();
  });

  // Default css & js
  app.use((req, res, next) => {
    res.locals.css = [
      `${$baseUrl()}/css/style.css`
    ];

    res.locals.topJs = [];
    res.locals.bottomJs = [];

    return next();
  });

  // Imports
  imports(app);

  // Controllers dispatch
  // app.use('/api', apiController);

  // React dispatch
  app.get('*', (req, res) => {
    res.render('frontend/index', {
      layout: false
    });
  });

  // Disabling x-powered-by
  app.disable('x-powered-by');

  // catch 404 and forward to error handler
  app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    return next(err);
  });

  // development error handler
  if (app.get('env') === 'development') {
    app.use((err, req, res, next) => {
      /* eslint no-console: 0 */
      console.log(err);

      res.status(err.status || 500);
      res.render('error', {
        message: err.message,
        error: err
      });
    });
  }

  // production error handler
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: {}
    });
  });
};
