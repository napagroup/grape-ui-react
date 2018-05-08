'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    ', '\n  '], ['\n    ', '\n  ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _textStyles = require('./textStyles');

var _fontSize = require('../../assets/json/fontSize.json');

var fontSizeSchema = _interopRequireWildcard(_fontSize);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var headerFactory = function headerFactory(props) {
  var headerTag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'h1';

  var otherProps = _objectWithoutProperties(props, []);

  var overrides = Object.assign({}, props, {
    fontSizeBase: fontSizeSchema[headerTag]
  });
  var baseStyles = (0, _textStyles.textStylesBase)(overrides);
  var Primitive = _styledComponents2.default[headerTag](_templateObject, baseStyles);
  return _react2.default.createElement(Primitive, otherProps);
};

var Header = function Header(props) {
  return headerFactory(props);
};

Header.h1 = Header;
Header.h2 = function (props) {
  return headerFactory(props, 'h2');
};
Header.h3 = function (props) {
  return headerFactory(props, 'h3');
};
Header.h4 = function (props) {
  return headerFactory(props, 'h4');
};
Header.h5 = function (props) {
  return headerFactory(props, 'h5');
};
Header.h6 = function (props) {
  return headerFactory(props, 'h6');
};
exports.Header = Header;