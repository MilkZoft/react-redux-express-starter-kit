import '../globalTest';
import {
  $appName,
  $baseUrl,
  $config,
  $html,
  $serverPort,
  $views,
  $webpack
} from '../../src/lib/config';

describe('@Config', () => {
  describe('#$appName', () => {
    it('should be a function', () => {
      assert.typeOf($appName, 'function', '$appName should be a function');
    });
  });

  describe('#$baseUrl', () => {
    it('should be a function', () => {
      assert.typeOf($baseUrl, 'function', '$baseUrl should be a function');
    });
  });

  describe('#$config', () => {
    it('should be a function', () => {
      assert.typeOf($config, 'function', '$config should be a function');
    });
  });

  describe('#$html', () => {
    it('should be a function', () => {
      assert.typeOf($html, 'function', '$html should be a function');
    });
  });

  describe('#$serverPort', () => {
    it('should be a function', () => {
      assert.typeOf($serverPort, 'function', '$serverPort should be a function');
    });
  });

  describe('#$views', () => {
    it('should be a function', () => {
      assert.typeOf($views, 'function', '$views should be a function');
    });
  });

  describe('#$webpack', () => {
    it('should be a function', () => {
      assert.typeOf($webpack, 'function', '$webpack should be a function');
    });
  });
});
