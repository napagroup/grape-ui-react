'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.textStylesBase = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    font-size: calc(', ' * ', ');\n    line-height: 1.5;\n    ', '\n  '], ['\n    font-size: calc(', ' * ', ');\n    line-height: 1.5;\n    ', '\n  ']);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _fontSize = require('../../assets/json/fontSize.json');

var fontSizeObject = _interopRequireWildcard(_fontSize);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var textStylesBase = exports.textStylesBase = function textStylesBase(props) {
  var fontSizeBase = props.fontSizeBase,
      italic = props.italic,
      lg = props.lg,
      sm = props.sm;

  var fontSizeVariants = fontSizeObject.sizeVariants;
  var sizeVariant = fontSizeVariants.base;
  if (lg) {
    sizeVariant = fontSizeVariants.lg;
  } else if (sm) {
    sizeVariant = fontSizeVariants.sm;
  }
  var Primitive = (0, _styledComponents.css)(_templateObject, fontSizeBase, sizeVariant, italic ? 'font-style: italic;' : '');
  return Primitive;
};

textStylesBase.propTypes = {
  fontSizeBase: _propTypes2.default.string,
  italic: _propTypes2.default.bool,
  lg: _propTypes2.default.bool,
  sm: _propTypes2.default.bool
};

textStylesBase.defaultProps = {
  fontSizeBase: fontSizeObject.baseFontSize,
  italic: false,
  lg: _propTypes2.default.bool,
  sm: _propTypes2.default.bool
};