'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextField = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ControlGroup = require('../../../elements/form/ControlGroup/ControlGroup');

var _componentHelpers = require('../../../utils/componentHelpers');

var _ = require('.');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextField = exports.TextField = function TextField(props) {
  var controlId = props.controlId;

  var overrides = Object.assign({}, props);
  var child = (0, _.withTextFieldComponentConvertor)(_react2.default.createElement('div', _extends({ controlId: controlId }, (0, _componentHelpers.passThrough)(TextField, overrides))));
  var ProtoTextField = (0, _ControlGroup.withControlGroup)(child);
  return _react2.default.createElement(ProtoTextField, overrides);
};

TextField.propTypes = {
  assistiveText: _propTypes2.default.string,
  controlId: _propTypes2.default.string.isRequired,
  controlLabel: _propTypes2.default.string.isRequired,
  validationError: _propTypes2.default.string
};

TextField.defaultProps = {
  assistiveText: '',
  validationError: ''
};