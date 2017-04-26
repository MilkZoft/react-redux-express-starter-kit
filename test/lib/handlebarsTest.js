import '../globalTest';
import { compress } from '../../src/lib/handlebars';

describe('@Handlebars', () => {
  describe('#compress', () => {
    it('should be a function', () => {
      assert.typeOf(compress, 'function', 'compress should be a function');
    });
  });
});
