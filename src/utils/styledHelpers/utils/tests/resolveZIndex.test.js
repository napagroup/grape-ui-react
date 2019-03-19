import { CSS_INHERIT_VALUE } from '../../cssDefaults';
import { resolveZIndex } from '../resolvers';

describe('resolveZIndex', () => {
  it('should return the inherit value if no depth or globalOverrides given', () => {
    // Act
    const actual = resolveZIndex();
    // Assert
    expect(actual).toBe(CSS_INHERIT_VALUE);
  });
  it('should return the inherit value depth is not a string', () => {
    // Act
    const actual = resolveZIndex(5);
    // Assert
    expect(actual).toBe(CSS_INHERIT_VALUE);
  });
  it('should return the inherit value depth is a string but not valid', () => {
    // Act
    const actual = resolveZIndex('07');
    // Assert
    expect(actual).toBe(CSS_INHERIT_VALUE);
  });
  it('should return the specified z-index value', () => {
    // Arrange
    const depth = '06';
    // Act
    const actual = resolveZIndex(depth);
    // Assert
    expect(actual).toBe('1060');
  });
});
