'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Text = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    ', '\n  '], ['\n    ', '\n  ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _textStyles = require('./textStyles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Text = function Text(props) {
  var otherProps = _objectWithoutProperties(props, []);

  var overrides = Object.assign({}, otherProps, {
    fontSizeBase: '100%'
  });
  var actualBase = (0, _textStyles.textStylesBase)(overrides);
  var ProtoText = _styledComponents2.default.span(_templateObject, actualBase);
  return _react2.default.createElement(ProtoText, otherProps);
};
exports.Text = Text;