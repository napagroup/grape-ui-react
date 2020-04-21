"use strict";

var _utils = require("../utils");

describe('formatForOnChange', () => {
  it('should return empty string if the date is invalid', () => {
    // Arrange
    const value = 'InvalidDate';
    const format = 'YYYY-MM-DD';
    const locale = 'en'; // Act

    const actual = (0, _utils.formatForOnChange)(value, format, locale); // Assert

    expect(actual).toBe('');
  });
  it('should return a valid date with the correct format', () => {
    // Arrange
    const value = new Date(2019, 4, 10); // Month increments starting from 0

    const format = 'M/D/YYYY';
    const locale = 'en'; // Act

    const actual = (0, _utils.formatForOnChange)(value, format, locale); // Assert

    expect(actual).toBe('5/10/2019');
  });
  it('should default date format to YYYY-MM-DD', () => {
    // Arrange
    const value = new Date(2019, 4, 10); // Month increments starting from 0
    // Act

    const actual = (0, _utils.formatForOnChange)(value); // Assert

    expect(actual).toBe('2019-05-10');
  });
  it('should default local to "en"', () => {
    // Arrange
    const value = new Date(2019, 4, 10); // Month increments starting from 0
    // Act

    const actual = (0, _utils.formatForOnChange)(value); // Assert

    expect(actual).toBe('2019-05-10');
  });
});
describe('formatForSelectedDay', () => {
  it('should return undefined if the date is empty', () => {
    // Arrange
    const value = '';
    const format = 'MM/DD/YYYY';
    const valueFormat = 'YYYY-MM-DD';
    const locale = 'en'; // Act

    const actual = (0, _utils.formatForSelectedDay)(value, valueFormat, format, locale); // Assert

    expect(actual).toBe(undefined);
  });
  it('should return undefined if the date is 20/56/2421', () => {
    // Arrange
    const value = '20/56/2421';
    const format = 'MM/DD/YYYY';
    const valueFormat = 'YYYY-MM-DD';
    const locale = 'en'; // Act

    const actual = (0, _utils.formatForSelectedDay)(value, valueFormat, format, locale); // Assert

    expect(actual).toBe(undefined);
  });
});