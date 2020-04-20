import { CSS_INHERIT_VALUE } from '../../cssDefaults';
import { resolveZIndex } from '../resolvers';
describe('resolveZIndex', function () {
  it('should return the inherit value if no depth or globalOverrides given', function () {
    // Act
    var actual = resolveZIndex(); // Assert

    expect(actual).toBe(CSS_INHERIT_VALUE);
  });
  it('should return the inherit value depth is not a string', function () {
    // Act
    var actual = resolveZIndex(5); // Assert

    expect(actual).toBe(CSS_INHERIT_VALUE);
  });
  it('should return the inherit value depth is a string but not valid', function () {
    // Act
    var actual = resolveZIndex('07'); // Assert

    expect(actual).toBe(CSS_INHERIT_VALUE);
  });
  it('should return the specified z-index value', function () {
    // Arrange
    var depth = '06'; // Act

    var actual = resolveZIndex(depth); // Assert

    expect(actual).toBe('1060');
  });
});