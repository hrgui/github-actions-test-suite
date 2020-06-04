const ping = require('./index');

it('should return pong', () => {
  expect(ping()).toEqual('pong');
});