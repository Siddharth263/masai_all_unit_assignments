import changeTime from './time.js';

test('18000 milliseconds equal to 3 seconds', () => {
    expect(changeTime(180000)).toBe('6 Minutes 18 Seconds');
  });