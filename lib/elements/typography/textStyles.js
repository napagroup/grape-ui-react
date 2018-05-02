'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.textStyleBaseFactory = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    font-size: ', ';\n    line-height: 1.5;\n  '], ['\n    font-size: ', ';\n    line-height: 1.5;\n  ']);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _fontFamily = require('../../assets/json/fontFamily.json');

var _fontSize = require('../../assets/json/fontSize.json');

var fontSizeAssets = _interopRequireWildcard(_fontSize);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// export const textStylesBase = props => {
//   const { italic, lg, sm, } = props;
//   const baseFontFamily = fontFamilyNative;
//   let fontSize = fontSizeAssets.p.base;
//   if (sm) { fontSize = fontSizeAssets.p.sm; }
//   if (lg) { fontSize = fontSizeAssets.p.lg; }
//   const Primitive = css`
//     font-family: ${baseFontFamily};
//     font-size: ${fontSize};
//     line-height: 1.5;
//     ${italic ? 'font-style: italic;' : ''}
//   `;
//   return Primitive;
// };

var textStyleBaseFactory = exports.textStyleBaseFactory = function textStyleBaseFactory(_ref) {
  var textStyleBaseElementType = _ref.textStyleBaseElementType;

  var sourceAsset = fontSizeAssets[textStyleBaseElementType];
  var fontSize = sourceAsset.base;
  var actualStyle = (0, _styledComponents.css)(_templateObject, fontSize);
  return actualStyle;
};

// textStylesBase.propTypes = {
//   elementType: PropTypes.string.isRequired,
//   italic: PropTypes.bool,
//   lg: PropTypes.bool,
//   sm: PropTypes.bool,
// };

// textStylesBase.defaultProps = {
//   italic: false,
//   lg: false,
//   sm: false,
// };