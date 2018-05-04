'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  ', '\n'], ['\n  ', '\n']),
    _templateObject2 = _taggedTemplateLiteral(['', ''], ['', '']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _textStyles = require('./textStyles');

var _fontSize = require('../../assets/json/fontSize.json');

var fontSizeObject = _interopRequireWildcard(_fontSize);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// export const Header = props => {
//   const { ...otherProps } = props;
//   const overrides = {
//     ...props,
//     fontSizeBase: fontSizeObject.h1,
//   };
//   
//   const ProtoHeader = styled.h1`
//     ${actualBase}
//   `;
//   return <ProtoHeader {...otherProps} />;

var actualBase = (0, _textStyles.textStylesBase)({ fontSizeBase: fontSizeObject.h1 });
var Header = _styledComponents2.default.h1(_templateObject, actualBase);

Header.h1 = Header;
Header.h2 = Header.withComponent('h2').extend(_templateObject2, (0, _textStyles.textStylesBase)({ fontSizeBase: fontSizeObject.h2 }));
Header.h3 = Header.withComponent('h3').extend(_templateObject2, (0, _textStyles.textStylesBase)({ fontSizeBase: fontSizeObject.h3 }));
Header.h4 = Header.withComponent('h4').extend(_templateObject2, (0, _textStyles.textStylesBase)({ fontSizeBase: fontSizeObject.h4 }));
Header.h5 = Header.withComponent('h5').extend(_templateObject2, (0, _textStyles.textStylesBase)({ fontSizeBase: fontSizeObject.h5 }));
Header.h6 = Header.withComponent('h6').extend(_templateObject2, (0, _textStyles.textStylesBase)({ fontSizeBase: fontSizeObject.h6 }));

exports.Header = Header;