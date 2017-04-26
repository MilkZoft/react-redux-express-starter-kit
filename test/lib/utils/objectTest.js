import '../../globalTest';
import {
  exists,
  forEach,
  keys,
  parseJson,
  parseObject,
  stringify,
  ternary
} from '../../../src/lib/utils/object';

describe('@Object', () => {
  describe('#exists', () => {
    it('should be a function', () => {
      assert.typeOf(exists, 'function', 'exists should be a function');
    });
  });

  describe('#forEach', () => {
    it('should be a function', () => {
      assert.typeOf(forEach, 'function', 'forEach should be a function');
    });
  });

  describe('#keys', () => {
    it('should be a function', () => {
      assert.typeOf(keys, 'function', 'keys should be a function');
    });
  });

  describe('#parseJson', () => {
    it('should be a function', () => {
      assert.typeOf(parseJson, 'function', 'parseJson should be a function');
    });
  });

  describe('#parseObject', () => {
    it('should be a function', () => {
      assert.typeOf(parseObject, 'function', 'parseObject should be a function');
    });
  });

  describe('#stringify', () => {
    it('should be a function', () => {
      assert.typeOf(stringify, 'function', 'stringify should be a function');
    });
  });

  describe('#ternary', () => {
    it('should be a function', () => {
      assert.typeOf(ternary, 'function', 'ternary should be a function');
    });
  });
});
