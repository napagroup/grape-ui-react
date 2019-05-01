import * as mockGlobalStyles from 'src/global-styles';
import { resolveBorderRadius } from '../resolvers';

describe('resolveBorderRadius', () => {
  const border = {
    borderRadius: {
      base: '4px',
      lg: '8px',
      sm: '2px',
    },
  };
  beforeEach(() => {
    mockGlobalStyles.getGlobalStyles = jest.fn().mockReturnValue({
      border,
    });
  });
  it('should return the base value 4px if no props', () => {
    // Act
    const actual = resolveBorderRadius(undefined);
    // Assert
    const expected = '4px';
    expect(actual).toBe(expected);
  });
  it('should return the base value 4px if no sm, lg or borderRadius or globalOverrides given', () => {
    // Arrange
    const props = { };
    // Act
    const actual = resolveBorderRadius(props);
    // Assert
    const expected = '4px';
    expect(actual).toBe(expected);
  });
  it('should return the sm specified size', () => {
    // Arrange
    const props = { sm: true };
    // Act
    const actual = resolveBorderRadius(props);
    // Assert
    const expected = '2px';
    expect(actual).toBe(expected);
  });
  it('should return the lg specified size', () => {
    // Arrange
    const props = { lg: true };
    // Act
    const actual = resolveBorderRadius(props);
    // Assert
    const expected = '8px';
    expect(actual).toBe(expected);
  });
  it('should return a custom border radius', () => {
    // Arrange
    const borderRadius = '50%';
    const props = { borderRadius };
    // Act
    const actual = resolveBorderRadius(props);
    // Assert
    expect(actual).toBe(borderRadius);
  });
});
