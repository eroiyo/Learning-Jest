const stringLength = require('./stringLength');

test('Should be 10', () => {
  expect(stringLength('HelloWorld')).toBe(10);
});

test('Should throw error for blank', () => {
    expect(stringLength('')).toBe('text is blank');
  });

  test('Should throw error for be too big', () => {
    expect(stringLength('thisisaverylongtext,surelyshouldhavemorethan10letters')).toBe('the text is too big');
  });

  test('Should not accept arrays', () => {
    expect(stringLength([1,2,3])).toBe('this is not text');
  });
