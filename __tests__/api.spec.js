const nx = require('@feizheng/next-js-core2');
require('../src/next-content-type');

describe('api.basic test', () => {
  test('nx.contentType supported list should return the map item:', function() {
    expect(nx.contentType('raw').includes('x-www-form-urlencoded')).toBe(true);
    expect(nx.contentType('urlencoded').includes('x-www-form-urlencoded')).toBe(true);
    expect(nx.contentType('json').includes('application/json')).toBe(true);
    expect(nx.contentType('multipart').includes('multipart/form-data')).toBe(true);
  });

  test('nx.contentType unsupported should return raw:', function() {
    expect(nx.contentType('abcft').includes('x-www-form-urlencoded')).toBe(true);
  });
});
