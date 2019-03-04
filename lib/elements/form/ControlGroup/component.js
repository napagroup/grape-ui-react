'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ControlGroupComponent = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ControlLabel = require('../../../elements/form/ControlLabel');

var _AssistiveText = require('../../../elements/form/AssistiveText');

var _styledSystem = require('styled-system');

var _componentHelpers = require('../../../utils/componentHelpers');

var _styledHelpers = require('../../../utils/styledHelpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var renderControlGroupLabel = function renderControlGroupLabel(propsFromControlGroup) {
  var text = propsFromControlGroup.text,
      activeColor = propsFromControlGroup.activeColor,
      bgColorFromProps = propsFromControlGroup.bg,
      disabled = propsFromControlGroup.disabled,
      controlId = propsFromControlGroup.controlId,
      hideLabel = propsFromControlGroup.hideLabel,
      validationError = propsFromControlGroup.validationError;

  if (!text || hideLabel) {
    return null;
  }
  var labelProps = {
    activeColor: activeColor,
    bg: bgColorFromProps,
    disabled: disabled,
    htmlFor: controlId,
    validationError: validationError
  };
  return _react2.default.createElement(
    _ControlLabel.ControlLabel,
    labelProps,
    text
  );
};

var renderControlGroupAssistive = function renderControlGroupAssistive(propsFromControlGroup) {
  var assistiveText = propsFromControlGroup.assistiveText,
      error = propsFromControlGroup.validationError,
      id = propsFromControlGroup.controlId;

  if (!assistiveText && !error) {
    return null;
  }if (assistiveText && !error) {
    return _react2.default.createElement(
      _AssistiveText.AssistiveText,
      { id: id + 'Help' },
      assistiveText
    );
  }
  return _react2.default.createElement(
    _AssistiveText.AssistiveText,
    { color: 'brandDanger', id: id + 'Error' },
    error
  );
};

var propsToTrim = ['activeColor', 'assistiveText', 'controlId', 'disabled', 'hideLabel', 'labelText', 'validationError'].concat(_toConsumableArray(Object.keys(_styledSystem.space.propTypes)), _toConsumableArray(Object.keys(_styledHelpers.typography.propTypes)));
var ControlGroupComponent = function ControlGroupComponent(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ['children']);

  var assistiveText = props.assistiveText,
      labelText = props.labelText,
      activeColor = props.activeColor,
      bgColorFromProps = props.bg,
      disabled = props.disabled,
      controlId = props.controlId,
      validationError = props.validationError,
      hideLabel = props.hideLabel;

  var labelProps = {
    activeColor: activeColor,
    bgColor: bgColorFromProps,
    controlId: controlId,
    disabled: disabled,
    hideLabel: hideLabel,
    text: labelText,
    validationError: validationError
  };
  var assistiveProps = {
    assistiveText: assistiveText,
    controlId: controlId,
    validationError: validationError
  };
  return _react2.default.createElement(
    'div',
    (0, _componentHelpers.removeSomeProps)(props, propsToTrim),
    children,
    renderControlGroupLabel(labelProps),
    renderControlGroupAssistive(assistiveProps)
  );
};

exports.ControlGroupComponent = ControlGroupComponent;
ControlGroupComponent.propTypes = Object.assign({
  activeColor: _propTypes2.default.string,
  assistiveText: _propTypes2.default.string,
  bg: _propTypes2.default.string,
  children: _propTypes2.default.any.isRequired,
  controlId: _propTypes2.default.string.isRequired,
  disabled: _propTypes2.default.bool,
  hideLabel: _propTypes2.default.bool,
  labelText: _propTypes2.default.string
}, _styledSystem.space.propTypes, {
  validationError: _propTypes2.default.string
}, _styledHelpers.typography.propTypes);

ControlGroupComponent.defaultProps = {
  activeColor: _styledHelpers.defaultControlStyles.activeColor,
  assistiveText: '',
  bg: _styledHelpers.defaultControlStyles.bg,
  disabled: false,
  hideLabel: false,
  labelText: '',
  validationError: ''
};