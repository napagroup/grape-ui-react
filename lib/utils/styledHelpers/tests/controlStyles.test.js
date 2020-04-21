"use strict";

var _controlStyles = require("../controlStyles");

describe('getFinalFieldPadding', () => {
  const padding = '4px';
  test('should return filled padding if the formStyle is filled and there is labelText', () => {
    // Arrange
    const formStyle = 'filled';
    const labelText = 'labelText'; // Act

    const actual = (0, _controlStyles.getFinalFieldPadding)(padding, formStyle, labelText); // Assert

    expect(actual).toEqual("\n    padding: 6rem 4px 2rem;\n    .grape-ui-select__control,\n    .DayPickerInput > input {\n      margin: -6rem -4px -2rem;\n      padding: 6rem 4px 2rem;\n      + .DayPickerInput-OverlayWrapper {\n        transform: translateX(-4px) translateY(calc(2rem + 2px));\n      }\n    }\n    + label {\n      background: transparent;\n      line-height: 1;\n      top: 3.8rem;\n    }\n  ");
  });
  test('should return padding if the formStyle is filled and there is no labelText', () => {
    // Arrange
    const formStyle = 'filled';
    const labelText = ''; // Act

    const actual = (0, _controlStyles.getFinalFieldPadding)(padding, formStyle, labelText); // Assert

    expect(actual).toEqual("\n    padding: 4px;\n    .grape-ui-select__control,\n    .DayPickerInput > input {\n      margin: -4px;\n      padding: 4px;\n      + .DayPickerInput-OverlayWrapper {\n        transform: translateX(-4px) translateY(calc(4px + 2px));\n      }\n    }\n  ");
  });
  test('should return padding if the formStyle is not filled and there is labelText', () => {
    // Arrange
    const formStyle = 'outline';
    const labelText = 'labelText'; // Act

    const actual = (0, _controlStyles.getFinalFieldPadding)(padding, formStyle, labelText); // Assert

    expect(actual).toEqual("\n    padding: 4px;\n    .grape-ui-select__control,\n    .DayPickerInput > input {\n      margin: -4px;\n      padding: 4px;\n      + .DayPickerInput-OverlayWrapper {\n        transform: translateX(-4px) translateY(calc(4px + 2px));\n      }\n    }\n  ");
  });
  test('should return padding if the formStyle is not filled and there is no labelText', () => {
    // Arrange
    const formStyle = 'outline';
    const labelText = ''; // Act

    const actual = (0, _controlStyles.getFinalFieldPadding)(padding, formStyle, labelText); // Assert

    expect(actual).toEqual("\n    padding: 4px;\n    .grape-ui-select__control,\n    .DayPickerInput > input {\n      margin: -4px;\n      padding: 4px;\n      + .DayPickerInput-OverlayWrapper {\n        transform: translateX(-4px) translateY(calc(4px + 2px));\n      }\n    }\n  ");
  });
});