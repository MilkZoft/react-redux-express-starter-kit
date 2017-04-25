// Dependencies
import bodyParser from 'body-parser';
import connectBusboy from 'connect-busboy';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import exphbs from 'express-handlebars';
import express from 'express';
import logger from 'morgan';
import path from 'path';
import stylus from 'stylus';

// Helpers
import * as hbsHelper from '../../lib/handlebars';

// Configuration
import { $html, $views, $serverPort } from '../../lib/config';

// Router
import router from '../router';

// Exporting the server
export default (app) => {
  // Compression
  app.use(compression());

  if (!$html().css.stylusPrecompile) {
    app.use(
      stylus.middleware({
        src: path.join(__dirname, '../../stylus'),
        dest: path.join(__dirname, '../../public/css'),
        compile: (str, path) => {
          return stylus(str)
            .set('filename', path)
            .set('compress', $html().css.compress);
        }
      })
    );
  }

  // Cookies
  app.use(cookieParser());

  // BodyParser
  app.use(logger('dev'));
  app.use(connectBusboy());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(express.static(path.join(__dirname, '../../public')));

  // Handlebars setup
  app.engine($views().engine, exphbs({
    extname: $views().extension,
    helpers: hbsHelper,
    layoutsDir: path.join(__dirname, '/../views/layouts'),
    partialsDir: path.join(__dirname, '/../views/partials')
  }));

  // view engine setup
  app.set('views', path.join(__dirname, '/../views'));
  app.set('view engine', $views().engine);

  // Router
  router(app);

  // Listening port...
  app.listen($serverPort() || 3000);
};
