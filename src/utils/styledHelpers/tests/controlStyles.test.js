import { getFinalFieldPadding } from '../controlStyles';

describe('getFinalFieldPadding', () => {
  const padding = '4px';
  test('should return filled padding if the formStyle is filled and there is labelText', () => {
    // Arrange
    const formStyle = 'filled';
    const labelText = 'labelText';
    // Act
    const actual = getFinalFieldPadding(padding, formStyle, labelText);
    // Assert
    expect(actual).toEqual('6rem 4px 2rem');
  });
  test('should return padding if the formStyle is filled and there is no labelText', () => {
    // Arrange
    const formStyle = 'filled';
    const labelText = '';
    // Act
    const actual = getFinalFieldPadding(padding, formStyle, labelText);
    // Assert
    expect(actual).toEqual('4px');
  });
  test('should return padding if the formStyle is not filled and there is labelText', () => {
    // Arrange
    const formStyle = 'outline';
    const labelText = 'labelText';
    // Act
    const actual = getFinalFieldPadding(padding, formStyle, labelText);
    // Assert
    expect(actual).toEqual('4px');
  });
  test('should return padding if the formStyle is not filled and there is no labelText', () => {
    // Arrange
    const formStyle = 'outline';
    const labelText = '';
    // Act
    const actual = getFinalFieldPadding(padding, formStyle, labelText);
    // Assert
    expect(actual).toEqual('4px');
  });
});
