const Calculator = require('./calculator');

const myCalculator = new Calculator(2,2);
  
  describe('my calculator', () => {
    test('it sums', () => {
      expect(myCalculator.sum()).toBe(4);
    });
  
    test('it divides', () => {
        expect(myCalculator.divide()).toBe(1);
      });

      test('it multiply', () => {
        expect(myCalculator.multiply()).toBe(4);
      });

      test('it rest', () => {
        expect(myCalculator.rest()).toBe(0);
      });
  });