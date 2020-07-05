import { formatCost } from './formatCost';

describe('formatCost:', () => {
  it('simple test formatCost', () => {
    expect(formatCost).toBeDefined();
    expect(formatCost(100)).toBe('100.00');
  });
});
