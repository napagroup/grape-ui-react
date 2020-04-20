"use strict";

var _controlStyles = require("../controlStyles");

describe('getFinalFieldPadding', () => {
  const padding = '4px';
  test('should return filled padding if the formStyle is filled and there is labelText', () => {
    // Arrange
    const formStyle = 'filled';
    const labelText = 'labelText'; // Act

    const actual = (0, _controlStyles.getFinalFieldPadding)(padding, formStyle, labelText); // Assert

    expect(actual).toEqual(`
    padding: 6rem 4px 2rem;
    .grape-ui-select__control,
    .DayPickerInput > input {
      margin: -6rem -4px -2rem;
      padding: 6rem 4px 2rem;
      + .DayPickerInput-OverlayWrapper {
        transform: translateX(-4px) translateY(calc(2rem + 2px));
      }
    }
    + label {
      background: transparent;
      line-height: 1;
      top: 3.8rem;
    }
  `);
  });
  test('should return padding if the formStyle is filled and there is no labelText', () => {
    // Arrange
    const formStyle = 'filled';
    const labelText = ''; // Act

    const actual = (0, _controlStyles.getFinalFieldPadding)(padding, formStyle, labelText); // Assert

    expect(actual).toEqual(`
    padding: 4px;
    .grape-ui-select__control,
    .DayPickerInput > input {
      margin: -4px;
      padding: 4px;
      + .DayPickerInput-OverlayWrapper {
        transform: translateX(-4px) translateY(calc(4px + 2px));
      }
    }
  `);
  });
  test('should return padding if the formStyle is not filled and there is labelText', () => {
    // Arrange
    const formStyle = 'outline';
    const labelText = 'labelText'; // Act

    const actual = (0, _controlStyles.getFinalFieldPadding)(padding, formStyle, labelText); // Assert

    expect(actual).toEqual(`
    padding: 4px;
    .grape-ui-select__control,
    .DayPickerInput > input {
      margin: -4px;
      padding: 4px;
      + .DayPickerInput-OverlayWrapper {
        transform: translateX(-4px) translateY(calc(4px + 2px));
      }
    }
  `);
  });
  test('should return padding if the formStyle is not filled and there is no labelText', () => {
    // Arrange
    const formStyle = 'outline';
    const labelText = ''; // Act

    const actual = (0, _controlStyles.getFinalFieldPadding)(padding, formStyle, labelText); // Assert

    expect(actual).toEqual(`
    padding: 4px;
    .grape-ui-select__control,
    .DayPickerInput > input {
      margin: -4px;
      padding: 4px;
      + .DayPickerInput-OverlayWrapper {
        transform: translateX(-4px) translateY(calc(4px + 2px));
      }
    }
  `);
  });
});