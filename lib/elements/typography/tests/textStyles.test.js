'use strict';

var _textStyles = require('../textStyles');

var defaultParams = {
  color: 'inherit',
  fontSizeBase: '1rem',
  fontWeight: 'inherit',
  italic: false,
  lg: false,
  sm: false,
  textAlign: 'inherit',
  scaleFactor: '1'
};

var renderTest = function renderTest(_ref) {
  var fontSizeBase = _ref.fontSizeBase,
      italic = _ref.italic,
      color = _ref.color,
      fontWeight = _ref.fontWeight,
      textAlign = _ref.textAlign,
      scaleFactor = _ref.scaleFactor;
  return '\n    font-size: calc(' + fontSizeBase + ' * ' + scaleFactor + ');\n    font-weight: ' + fontWeight + ';\n    line-height: 1.5;\n    ' + (italic ? 'font-style: italic;' : '') + '\n    color: ' + color + ';\n    text-align: ' + textAlign + ';\n  ';
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
  it('should override color style when passed in a valid color', function () {
    var green = 'hsl(122.4, 39.4%, 49.2%)';
    var actualTextStyles = (0, _textStyles.textStylesBase)({ color: 'green' });
    expect(actualTextStyles).toEqual(renderTest(Object.assign({}, defaultParams, {
      color: green
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
});