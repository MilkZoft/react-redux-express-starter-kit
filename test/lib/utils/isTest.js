import '../../globalTest';
import {
  isArray,
  isDefined,
  isEmail,
  isFunction,
  isJson,
  isNumber,
  isObject,
  isString,
  isUndefined
} from '../../../src/lib/utils/is';

describe('@Is', () => {
  describe('#isArray', () => {
    it('should be a function', () => {
      assert.typeOf(isArray, 'function', 'isArray should be a function');
    });

    it('should return true if is an Array', () => {
      const foo = [1, 2, 3];
      const actualResult = isArray(foo);

      assert.isTrue(actualResult, 'foo should be an array');
    });

    it('should return false if is not an Array', () => {
      const foo = {
        bar: 'bar',
        foo: 'foo'
      };
      const actualResult = isArray(foo);

      assert.isFalse(actualResult, 'foo should be an object');
    });
  });

  describe('#isDefined', () => {
    it('should be a function', () => {
      assert.typeOf(isDefined, 'function', 'isDefined should be a function');
    });

    it('should return true if a variable is defined', () => {
      const test = 'Foo';
      const actualResult = isDefined(test);

      assert.isTrue(actualResult, 'test variable should be defined');
    });

    it('should return false if a variable is undefined', () => {
      let test;
      const actualResult = isDefined(test);

      assert.isFalse(actualResult, 'test variable should be defined');
    });
  });

  describe('#isEmail', () => {
    it('should be a function', () => {
      assert.typeOf(isEmail, 'function', 'isEmail should be a function');
    });

    it('should be true if a variable is an email', () => {
      const email = 'foo@bar.com';

      const actualResult = isEmail(email);

      assert.isTrue(actualResult, 'actualResult should be a valid email');
    });
  });

  describe('#isFunction', () => {
    it('should be a function', () => {
      assert.typeOf(isFunction, 'function', 'isFunction should be a function');
    });

    it('should be true if a variable is a function', () => {
      const foo = () => {
        return 'bar';
      };

      const actualResult = isFunction(foo);

      assert.isTrue(actualResult, 'foo variable should be function');
    });
  });

  describe('#isJson', () => {
    it('should be a function', () => {
      assert.typeOf(isJson, 'function', 'isJson should be a function');
    });
  });

  describe('#isNumber', () => {
    it('should be a function', () => {
      assert.typeOf(isNumber, 'function', 'isNumber should be a function');
    });
  });

  describe('#isObject', () => {
    it('should be a function', () => {
      assert.typeOf(isObject, 'function', 'isObject should be a function');
    });

    it('should return true if a variable is object', () => {
      const test = {
        foo: 'Foo'
      };

      assert.isTrue(
        isObject(test),
        'test variable should be an object'
      );
    });
  });

  describe('#isString', () => {
    it('should be a function', () => {
      assert.typeOf(isString, 'function', 'isString should be a function');
    });
  });

  describe('#isUndefined', () => {
    it('should be a function', () => {
      assert.typeOf(isUndefined, 'function', 'isUndefined should be a function');
    });
  });
});
