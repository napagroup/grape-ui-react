"use strict";

var _controlStyles = require("../controlStyles");

describe('getFinalFieldPadding', function () {
  var padding = '4px';
  test('should return filled padding if the formStyle is filled and there is labelText', function () {
    // Arrange
    var formStyle = 'filled';
    var labelText = 'labelText'; // Act

    var actual = (0, _controlStyles.getFinalFieldPadding)(padding, formStyle, labelText); // Assert

    expect(actual).toEqual('6rem 4px 2rem');
  });
  test('should return padding if the formStyle is filled and there is no labelText', function () {
    // Arrange
    var formStyle = 'filled';
    var labelText = ''; // Act

    var actual = (0, _controlStyles.getFinalFieldPadding)(padding, formStyle, labelText); // Assert

    expect(actual).toEqual('4px');
  });
  test('should return padding if the formStyle is not filled and there is labelText', function () {
    // Arrange
    var formStyle = 'outline';
    var labelText = 'labelText'; // Act

    var actual = (0, _controlStyles.getFinalFieldPadding)(padding, formStyle, labelText); // Assert

    expect(actual).toEqual('4px');
  });
  test('should return padding if the formStyle is not filled and there is no labelText', function () {
    // Arrange
    var formStyle = 'outline';
    var labelText = ''; // Act

    var actual = (0, _controlStyles.getFinalFieldPadding)(padding, formStyle, labelText); // Assert

    expect(actual).toEqual('4px');
  });
});