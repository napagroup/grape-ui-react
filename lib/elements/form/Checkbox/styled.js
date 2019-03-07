'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckboxField = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ControlLabel = require('../../../elements/form/ControlLabel');

var _ControlGroup = require('../../../elements/form/ControlGroup');

var _componentHelpers = require('../../../utils/componentHelpers');

var _styledSystem = require('styled-system');

var _PlainText = require('../../../elements/form/PlainText');

var _styledHelpers = require('../../../utils/styledHelpers');

var _AssistiveText = require('../../../elements/form/AssistiveText');

var _component = require('./component');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var propsToTrim = ['activeColor', 'assistiveText', 'bg', 'controlId', 'labelText', 'plainText', 'validationError'].concat(_toConsumableArray(Object.keys(_styledSystem.space.propTypes)));
var renderValueOrComponent = function renderValueOrComponent(propsFromComponent) {
  var controlId = propsFromComponent.controlId,
      plainText = propsFromComponent.plainText,
      disabled = propsFromComponent.disabled,
      value = propsFromComponent.value,
      defaultValue = propsFromComponent.defaultValue,
      flexDirection = propsFromComponent.flexDirection;

  if (plainText) {
    var plainTextProps = Object.assign({}, (0, _componentHelpers.removeSomeProps)(propsFromComponent, ['controlId', 'labelText', 'assistiveText', 'name', 'onChange', 'options', 'plainText', 'validationError', 'flexDirection', 'assistiveText', 'validationError']));
    return _react2.default.createElement(_PlainText.PlainText, plainTextProps);
  }
  var childProps = Object.assign({ id: controlId }, (0, _componentHelpers.removeSomeProps)(propsFromComponent, propsToTrim));
  return _react2.default.createElement(_component.CheckboxFieldComponent, _extends({}, childProps, { disabled: disabled, flexDirection: flexDirection, value: value || defaultValue }));
};
var CheckboxField = exports.CheckboxField = function CheckboxField(props) {
  var activeColor = props.activeColor,
      assistiveText = props.assistiveText,
      controlId = props.controlId,
      disabled = props.disabled,
      labelText = props.labelText,
      required = props.required,
      validationError = props.validationError,
      plainText = props.plainText,
      bg = props.bg;


  var labelCaption = !required ? labelText : labelText + '*';
  var controlGroupProps = {
    controlId: controlId
  };
  var assistiveProps = { assistiveText: assistiveText, required: required };

  return _react2.default.createElement(
    _ControlGroup.ControlGroup,
    _extends({
      pb: 3,
      pt: 1
    }, controlGroupProps, {
      assistiveText: (0, _AssistiveText.getAssistiveText)(assistiveProps),
      validationError: validationError
    }),
    _react2.default.createElement(
      _ControlLabel.ControlLabel,
      {
        activeColor: activeColor,
        bg: bg,
        disabled: disabled,
        htmlFor: controlId,
        isRelative: true,
        validationError: validationError
      },
      labelCaption
    ),
    renderValueOrComponent(Object.assign({}, props, { plainText: plainText }))
  );
};

CheckboxField.propTypes = Object.assign({
  activeColor: _propTypes2.default.string,
  assistiveText: _propTypes2.default.string,
  bg: _propTypes2.default.string,
  controlId: _propTypes2.default.string.isRequired,
  disabled: _propTypes2.default.bool,
  flexDirection: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.array]),
  labelText: _propTypes2.default.string,
  plainText: _propTypes2.default.bool,
  validationError: _propTypes2.default.string
}, _styledSystem.space.propTypes);

CheckboxField.defaultProps = {
  activeColor: _styledHelpers.defaultControlStyles.activeColor,
  assistiveText: '',
  bg: _styledHelpers.defaultControlStyles.bg,
  disabled: false,
  flexDirection: 'column',
  labelText: '',
  plainText: false,
  validationError: ''
};