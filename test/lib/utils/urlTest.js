import '../../globalTest';
import {
  getCurrentApp,
  getParamsFromUrl,
  getValueFromParam,
  getLocation,
  getCurrentFrontendApp
} from '../../../src/lib/utils/url';

global.window = {
  location: {
    href: 'http://local.codejobs.biz/es/blog',
    pathname: '/es/blog'
  }
};

describe('@Url', () => {
  describe('#getCurrentApp', () => {
    it('should be a function', () => {
      assert.typeOf(getCurrentApp, 'function', 'getCurrentApp should be a function');
    });
  });

  describe('#getParamsFromUrl', () => {
    it('should be a function', () => {
      assert.typeOf(getParamsFromUrl, 'function', 'getParamsFromUrl should be a function');
    });

    it('should return an array of params from given url', () => {
      const url = '/es/blog';
      const actualResult = getParamsFromUrl(url);
      const expectedResult = ['es', 'blog'];

      assert.deepEqual(
        actualResult,
        expectedResult,
        'actualResult should match expectedResult'
      );
    });
  });

  describe('#getValueFromParam', () => {
    it('should be a function', () => {
      assert.typeOf(getValueFromParam, 'function', 'getValueFromParam should be a function');
    });

    it('should return the value from given param', () => {
      const param = '/1';
      const actualResult = getValueFromParam(param);
      const expectedResult = '1';

      assert.isTrue(actualResult === expectedResult, 'should be the current app');
    });
  });

  describe('#getLocation', () => {
    it('should be a function', () => {
      assert.typeOf(getLocation, 'function', 'getLocation should be a function');
    });

    it('should return the location value', () => {
      const actualResult = getLocation();
      const expectedResult = {
        href: 'http://local.codejobs.biz/es/blog',
        pathname: '/es/blog'
      };

      assert.deepEqual(
        actualResult,
        expectedResult,
        'actualResult should match expectedResult'
      );
    });
  });

  describe('#getCurrentFrontendApp', () => {
    it('should be a function', () => {
      assert.typeOf(getCurrentFrontendApp, 'function', 'getCurrentFrontendApp should be a function');
    });
  });
});
