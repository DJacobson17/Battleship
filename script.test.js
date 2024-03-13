const shipCreator = require('./script').shipCreator;

test('shipCreator returns an object', () => {
  expect(typeof shipCreator(4, 0, false)).toBe('object');
});

test('hit method increments hits', () => {
  const ship = shipCreator(4, 0, false);
  ship.hit();
  expect(ship.hits).toBe(1);
});

test('isSunk method returns true if hits equals length', () => {
  const ship = shipCreator(4, 4, false);
  expect(ship.isSunk()).toBe(true);
});

