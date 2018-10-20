const { normalizeOptions } = require('../lib/normalize-options');

/**
 * Test expected option values after normalization.
 */
describe('Test option validation', () => {
  test('omit invalid values', () => {
    expect(normalizeOptions({
      columns: 'none', gap: '10vw', edge: 2, siteMax: '90',
    })).toEqual({});
  });

  test('`addGap` String to Boolean', () => {
    expect(normalizeOptions({
      addGap: 'false',
    })).toEqual({
      addGap: false,
    });
  });

  test('`columns` String to Number', () => {
    expect(normalizeOptions({
      columns: '12',
    })).toEqual({
      columns: 12,
    });
  });

  test('Breakpoint with no units', () => {
    expect(normalizeOptions({
      breakpoints: [
        {
          breakpoint: 768,
          gap: '1rem',
          edge: '1.25rem',
        }
      ],
    })).toEqual({
      breakpoints: [
        {
          breakpoint: '768px',
          gap: '1rem',
          edge: '1.25rem',
        }
      ]
    });
  });
});
