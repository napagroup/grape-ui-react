/* eslint-disable import/no-duplicates */
import { getGlobalStyles } from 'src/global-styles';
import { colorCore, defaultStylesBase } from '../..';

var _getGlobalStyles = getGlobalStyles(),
    colorSchema = _getGlobalStyles.colors;

describe('When given props with undefined color and bg', function () {
  it('should return the default styling for background and color', function () {
    var props = {};
    var expected = {
      backgroundColor: defaultStylesBase.bg,
      color: defaultStylesBase.color
    };
    expect(colorCore(props)).toEqual(expected);
  });
});
describe('When given props with color and bg', function () {
  it('should return the default styling for background and color', function () {
    var props = {
      bg: 'green.dark',
      color: 'green'
    };
    var expected = {
      backgroundColor: colorSchema.green.dark,
      color: colorSchema.green.base
    };
    expect(colorCore(props)).toEqual(expected);
  });
});
describe('When given props with non-variable color and bg', function () {
  it('should return the default styling for background and color', function () {
    var props = {
      bg: '#ff0000',
      color: '#ffffff'
    };
    var expected = {
      backgroundColor: props.bg,
      color: props.color
    };
    expect(colorCore(props)).toEqual(expected);
  });
});