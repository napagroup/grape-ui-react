'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    ', '\n  '], ['\n    ', '\n  ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _textStyles = require('./textStyles');

var _componentHelpers = require('../../utils/componentHelpers');

var _fontSize = require('../../assets/json/fontSize.json');

var fontSizeSchema = _interopRequireWildcard(_fontSize);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var headerFactory = function headerFactory(_ref) {
  var props = _ref.props,
      _ref$tag = _ref.tag,
      tag = _ref$tag === undefined ? 'h1' : _ref$tag;

  var color = props.color,
      display = props.display,
      otherProps = _objectWithoutProperties(props, ['color', 'display']);

  var fontSizeSchemaVariable = fontSizeSchema;
  if (display) {
    fontSizeSchemaVariable = fontSizeSchema.display;
  }
  var overrides = Object.assign({}, props, {
    colorBase: (0, _componentHelpers.resolveColor)(color),
    fontSizeBase: fontSizeSchemaVariable[tag],
    fontWeight: display ? '300' : 'inherit'
  });
  var baseStyles = (0, _textStyles.textStylesBase)(overrides);
  var Primitive = _styledComponents2.default[tag](_templateObject, baseStyles);
  return _react2.default.createElement(Primitive, otherProps);
};

headerFactory.propTypes = {
  color: _propTypes2.default.string,
  display: _propTypes2.default.bool,
  props: _propTypes2.default.any.isRequired,
  tag: _propTypes2.default.string
};

headerFactory.defaultProps = {
  color: 'inherit',
  display: false,
  tag: 'h1'
};

var Header = function Header(props) {
  return headerFactory({ props: props });
};

Header.h1 = Header;
Header.h2 = function (props) {
  return headerFactory({ props: props, tag: 'h2' });
};
Header.h3 = function (props) {
  return headerFactory({ props: props, tag: 'h3' });
};
Header.h4 = function (props) {
  return headerFactory({ props: props, tag: 'h4' });
};
Header.h5 = function (props) {
  return headerFactory({ props: props, tag: 'h5' });
};
Header.h6 = function (props) {
  return headerFactory({ props: props, tag: 'h6' });
};
exports.Header = Header;