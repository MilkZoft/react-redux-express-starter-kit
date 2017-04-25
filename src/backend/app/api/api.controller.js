// Dependencies
import express from 'express';

// Utils
import { isFunction } from '../../lib/utils/is';
import { camelCase, sanitize } from '../../lib/utils/string';

// Express Router
const Router = express.Router();

Router.get('/home/:endpoint*?', (req, res, next) => {
  const endpointMethod = camelCase(req.params.endpoint);
  const data = sanitize(req.query);

  if (isFunction(res.homeAPI[endpointMethod])) {
    return res.homeAPI[endpointMethod](data, response => {
      if (response) {
        res.json({
          response
        });
      } else {
        res.json({
          error: 'No Data Found'
        });
      }
    });
  } else {
    res.json({
      error: 'Invalid Method'
    });
  }
});

export default Router;
