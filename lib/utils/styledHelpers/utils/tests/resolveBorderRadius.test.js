import * as mockGlobalStyles from 'src/global-styles';
import { resolveBorderRadius } from '../resolvers';
describe('resolveBorderRadius', function () {
  var border = {
    borderRadius: {
      base: '4px',
      lg: '8px',
      sm: '2px'
    }
  };
  beforeEach(function () {
    mockGlobalStyles.getGlobalStyles = jest.fn().mockReturnValue({
      border: border
    });
  });
  it('should return the base value 4px if no props', function () {
    // Act
    var actual = resolveBorderRadius({}); // Assert

    var expected = '4px';
    expect(actual).toBe(expected);
  });
  it('should return the base value 4px if no sm, lg or borderRadius or globalOverrides given', function () {
    // Arrange
    var props = {}; // Act

    var actual = resolveBorderRadius(props); // Assert

    var expected = '4px';
    expect(actual).toBe(expected);
  });
  it('should return the sm specified size', function () {
    // Arrange
    var props = {
      sm: true
    }; // Act

    var actual = resolveBorderRadius(props); // Assert

    var expected = '2px';
    expect(actual).toBe(expected);
  });
  it('should return the lg specified size', function () {
    // Arrange
    var props = {
      lg: true
    }; // Act

    var actual = resolveBorderRadius(props); // Assert

    var expected = '8px';
    expect(actual).toBe(expected);
  });
  it('should return a custom border radius', function () {
    // Arrange
    var borderRadius = '50%';
    var props = {
      borderRadius: borderRadius
    }; // Act

    var actual = resolveBorderRadius(props); // Assert

    expect(actual).toBe(borderRadius);
  });
});