import orderByProps from '../app';

const char = {
  name: 'мечник',
  health: 10,
  level: 2,
  attack: 80,
  defence: 40,
};

test('orderByProps should return sorted array', () => {
  const expectedOutput = [
    { name: 'мечник' },
    { level: 2 },
    { attack: 80 },
    { defence: 40 },
    { health: 10 },
  ];
  expect(orderByProps(char, ['name', 'level'])).toEqual(expectedOutput);
});

test('orderByProps should work without order parameter', () => {
  const expectedOutput = [
    { attack: 80 },
    { defence: 40 },
    { health: 10 },
    { level: 2 },
    { name: 'мечник' },
  ];
  expect(orderByProps(char)).toEqual(expectedOutput);
});
