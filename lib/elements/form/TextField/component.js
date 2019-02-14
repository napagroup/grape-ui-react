'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextInputComponent = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _textStyles = require('../../../elements/typography/textStyles');

var _baseControlStyle = require('../ControlGroup/baseControlStyle');

var _componentHelpers = require('../../../utils/componentHelpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var TextInputComponent = function TextInputComponent(_ref) {
  var plainText = _ref.plainText,
      props = _objectWithoutProperties(_ref, ['plainText']);

  return _react2.default.createElement('input', _extends({ readOnly: plainText, tabIndex: plainText ? '-1' : '0', type: 'text' }, (0, _componentHelpers.passThrough)(TextInputComponent, props)));
};
exports.TextInputComponent = TextInputComponent;
TextInputComponent.propTypes = Object.assign({}, _baseControlStyle.control.propTypes, _textStyles.typography.propTypes, {
  validationError: _propTypes2.default.string
});

TextInputComponent.defaultProps = Object.assign({}, _baseControlStyle.defaultControlStylesBase, {
  validationError: ''
});