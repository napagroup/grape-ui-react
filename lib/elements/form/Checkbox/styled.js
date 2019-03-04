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

var _component = require('./component');

var _baseControlStyle = require('../ControlGroup/baseControlStyle');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderValueOrComponent = function renderValueOrComponent(component, propsFromComponent) {
  var controlId = propsFromComponent.controlId,
      plainText = propsFromComponent.plainText,
      disabled = propsFromComponent.disabled,
      value = propsFromComponent.value,
      defaultValue = propsFromComponent.defaultValue;

  if (plainText) {
    var plainTextProps = Object.assign({
      value: value
    }, (0, _componentHelpers.removeSomeProps)(propsFromComponent, ['controlId', 'labelText', 'assistiveText', 'name', 'onChange', 'options', 'plainText', 'validationError']));
    return _react2.default.createElement(_PlainText.PlainText, plainTextProps);
  }
  var childProps = Object.assign({ id: controlId }, (0, _componentHelpers.passThrough)(component, propsFromComponent));
  return _react2.default.createElement(_component.CheckboxFieldComponent, _extends({}, childProps, { disabled: disabled, value: value || defaultValue }));
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
      bgColor = props.bgColor;


  var labelCaption = !required ? labelText : labelText + '*';
  var controlGroupProps = {
    assistiveText: assistiveText,
    controlId: controlId
  };

  return _react2.default.createElement(
    _ControlGroup.ControlGroup,
    controlGroupProps,
    _react2.default.createElement(
      _ControlLabel.ControlLabel,
      {
        activeColor: activeColor,
        bgColor: bgColor,
        disabled: disabled,
        htmlFor: controlId,
        isRelative: true,
        validationError: validationError
      },
      labelCaption,
      renderValueOrComponent(CheckboxField, Object.assign({}, props, { plainText: plainText }))
    )
  );
};

CheckboxField.propTypes = Object.assign({
  activeColor: _propTypes2.default.string,
  assistiveText: _propTypes2.default.string,
  bgColor: _propTypes2.default.string,
  controlId: _propTypes2.default.string.isRequired,
  disabled: _propTypes2.default.bool,
  labelText: _propTypes2.default.string,
  plainText: _propTypes2.default.bool,
  validationError: _propTypes2.default.string
}, _styledSystem.space.propTypes);

CheckboxField.defaultProps = {
  activeColor: _baseControlStyle.defaultControlStylesBase.activeColor,
  assistiveText: '',
  bgColor: _baseControlStyle.defaultControlStylesBase.bgColor,
  disabled: false,
  labelText: '',
  plainText: false,
  validationError: ''
};