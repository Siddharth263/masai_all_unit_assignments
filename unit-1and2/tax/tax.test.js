import {calculateTax, rebate} from './tax.js';

test('10LPA gives 3L tax', () => {
  expect(calculateTax(1000000)).toBe(300000);
});