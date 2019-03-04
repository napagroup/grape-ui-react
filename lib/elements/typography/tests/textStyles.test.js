'use strict';

var _globalStyles = require('../../../global-styles');

var _textStyles = require('../textStyles');

var _utils = require('../utils');

var _getGlobalStyles = (0, _globalStyles.getGlobalStyles)(),
    fontFamilySchema = _getGlobalStyles.fontFamily;

var defaultParams = Object.assign({}, _textStyles.defaultTextStylesBase);

var renderTest = function renderTest(_ref) {
  var fontFamily = _ref.fontFamily,
      fontSize = _ref.fontSize,
      kerning = _ref.kerning,
      italic = _ref.italic,
      color = _ref.color,
      fontWeight = _ref.fontWeight,
      textAlign = _ref.textAlign,
      scaleFactor = _ref.scaleFactor,
      textDecoration = _ref.textDecoration;
  return '\n    font-family: ' + fontFamily + ';\n    font-size: ' + (scaleFactor ? (0, _utils.getScaledFontSize)(fontSize, scaleFactor) : fontSize) + ';\n    font-weight: ' + fontWeight + ';\n    letter-spacing: ' + kerning + ';\n    line-height: 1.5;\n    ' + (italic ? 'font-style: italic;' : '') + '\n    color: ' + color + ';\n    text-align: ' + textAlign + ';\n    text-decoration: ' + textDecoration + ';\n  ';
};
var defaultTextStyles = renderTest(defaultParams);
describe('When resolving base text-styles', function () {
  it('should return default styles when calling the default function', function () {
    var actualTextStyles = (0, _textStyles.textStylesBase)();
    expect(actualTextStyles).toEqual(defaultTextStyles);
  });
  it('should return default styles when passed in a falsy value', function () {
    var actualTextStyles = (0, _textStyles.textStylesBase)(undefined);
    expect(actualTextStyles).toEqual(defaultTextStyles);
  });
  it('should return default styles when passed in an array', function () {
    var actualTextStyles = (0, _textStyles.textStylesBase)([]);
    expect(actualTextStyles).toEqual(defaultTextStyles);
  });
  it('should return default styles when passed in an empty object literal', function () {
    var actualTextStyles = (0, _textStyles.textStylesBase)({});
    expect(actualTextStyles).toEqual(defaultTextStyles);
  });
});

describe('When overriding text-styles', function () {
  it('should override the font-family', function () {
    var fontFamilyType = fontFamilySchema.sansSerif;
    var actualTextStyles = (0, _textStyles.textStylesBase)({ fontFamily: 'sansSerif' });
    expect(actualTextStyles).toEqual(renderTest(Object.assign({}, defaultParams, {
      fontFamily: fontFamilyType
    })));
  });
  it('should override font-size calc when passed in sm', function () {
    var actualTextStyles = (0, _textStyles.textStylesBase)({ sm: true });
    expect(actualTextStyles).toEqual(renderTest(Object.assign({}, defaultParams, {
      scaleFactor: '.8'
    })));
  });
  it('should override font-size calc when passed in lg', function () {
    var actualTextStyles = (0, _textStyles.textStylesBase)({ lg: true });
    expect(actualTextStyles).toEqual(renderTest(Object.assign({}, defaultParams, {
      scaleFactor: '1.2'
    })));
  });
  it('should override the font-weight', function () {
    var fontWeight = 'bolder';
    var actualTextStyles = (0, _textStyles.textStylesBase)({ fontWeight: fontWeight });
    expect(actualTextStyles).toEqual(renderTest(Object.assign({}, defaultParams, {
      fontWeight: fontWeight
    })));
  });
  it('should override the letter-spacing when passed in kerning', function () {
    var kerning = 'normal';
    var actualTextStyles = (0, _textStyles.textStylesBase)({ kerning: kerning });
    expect(actualTextStyles).toEqual(renderTest(Object.assign({}, defaultParams, {
      kerning: kerning
    })));
  });
  it('should override the font-style to italic', function () {
    var actualTextStyles = (0, _textStyles.textStylesBase)({ italic: true });
    expect(actualTextStyles).toEqual(renderTest(Object.assign({}, defaultParams, {
      italic: true
    })));
  });
  it('should override color style when passed in a valid color', function () {
    var green = 'hsl(122.4, 39.4%, 49.2%)';
    var actualTextStyles = (0, _textStyles.textStylesBase)({ color: 'green' });
    expect(actualTextStyles).toEqual(renderTest(Object.assign({}, defaultParams, {
      color: green
    })));
  });
  it('should override the text alignment when passed in textAlign', function () {
    var textAlign = 'right';
    var actualTextStyles = (0, _textStyles.textStylesBase)({ textAlign: textAlign });
    expect(actualTextStyles).toEqual(renderTest(Object.assign({}, defaultParams, {
      textAlign: textAlign
    })));
  });
  it('should override the text decoration when passed in textDecoration', function () {
    var textDecoration = 'underline';
    var actualTextStyles = (0, _textStyles.textStylesBase)({ textDecoration: textDecoration });
    expect(actualTextStyles).toEqual(renderTest(Object.assign({}, defaultParams, {
      textDecoration: textDecoration
    })));
  });
});