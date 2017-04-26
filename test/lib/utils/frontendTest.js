import '../../globalTest';
import {
  attrs,
  getNewState,
  isFirstRender,
  loadImage,
  redirectTo,
  setClass
} from '../../../src/lib/utils/frontend';

describe('@Frontend', () => {
  describe('#attrs', () => {
    it('should be a function', () => {
      assert.typeOf(attrs, 'function', 'attrs should be a function');
    });
  });

  describe('#getNewState', () => {
    it('should be a function', () => {
      assert.typeOf(getNewState, 'function', 'getNewState should be a function');
    });
  });

  describe('#isFirstRender', () => {
    it('should be a function', () => {
      assert.typeOf(isFirstRender, 'function', 'isFirstRender should be a function');
    });
  });

  describe('#loadImage', () => {
    it('should be a function', () => {
      assert.typeOf(loadImage, 'function', 'loadImage should be a function');
    });
  });

  describe('#redirectTo', () => {
    it('should be a function', () => {
      assert.typeOf(redirectTo, 'function', 'redirectTo should be a function');
    });
  });

  describe('#setClass', () => {
    it('should be a function', () => {
      assert.typeOf(setClass, 'function', 'setClass should be a function');
    });
  });
});
