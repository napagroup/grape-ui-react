'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextField = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ControlGroup = require('../../../elements/form/ControlGroup/ControlGroup');

var _componentHelpers = require('../../../utils/componentHelpers');

var _TextFieldComponent = require('./TextFieldComponent');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextField = exports.TextField = function TextField(props) {
  var controlId = props.controlId,
      assistiveText = props.assistiveText,
      controlLabel = props.controlLabel,
      validationError = props.validationError;


  var childProps = Object.assign({ id: controlId }, (0, _componentHelpers.passThrough)(TextField, props));
  return _react2.default.createElement(
    _ControlGroup.ControlGroupBase,
    {
      assistiveText: assistiveText,
      controlId: controlId,
      controlLabel: controlLabel,
      validationError: validationError
    },
    _react2.default.createElement(_TextFieldComponent.TextFieldComponent, childProps)
  );
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