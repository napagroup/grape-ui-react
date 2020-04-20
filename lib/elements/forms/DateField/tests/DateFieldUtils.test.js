import "core-js/modules/es.date.to-string";
import { formatForOnChange, formatForSelectedDay } from '../utils';
describe('formatForOnChange', function () {
  it('should return empty string if the date is invalid', function () {
    // Arrange
    var value = 'InvalidDate';
    var format = 'YYYY-MM-DD';
    var locale = 'en'; // Act

    var actual = formatForOnChange(value, format, locale); // Assert

    expect(actual).toBe('');
  });
  it('should return a valid date with the correct format', function () {
    // Arrange
    var value = new Date(2019, 4, 10); // Month increments starting from 0

    var format = 'M/D/YYYY';
    var locale = 'en'; // Act

    var actual = formatForOnChange(value, format, locale); // Assert

    expect(actual).toBe('5/10/2019');
  });
  it('should default date format to YYYY-MM-DD', function () {
    // Arrange
    var value = new Date(2019, 4, 10); // Month increments starting from 0
    // Act

    var actual = formatForOnChange(value); // Assert

    expect(actual).toBe('2019-05-10');
  });
  it('should default local to "en"', function () {
    // Arrange
    var value = new Date(2019, 4, 10); // Month increments starting from 0
    // Act

    var actual = formatForOnChange(value); // Assert

    expect(actual).toBe('2019-05-10');
  });
});
describe('formatForSelectedDay', function () {
  it('should return undefined if the date is empty', function () {
    // Arrange
    var value = '';
    var format = 'MM/DD/YYYY';
    var valueFormat = 'YYYY-MM-DD';
    var locale = 'en'; // Act

    var actual = formatForSelectedDay(value, valueFormat, format, locale); // Assert

    expect(actual).toBe(undefined);
  });
  it('should return undefined if the date is 20/56/2421', function () {
    // Arrange
    var value = '20/56/2421';
    var format = 'MM/DD/YYYY';
    var valueFormat = 'YYYY-MM-DD';
    var locale = 'en'; // Act

    var actual = formatForSelectedDay(value, valueFormat, format, locale); // Assert

    expect(actual).toBe(undefined);
  });
});