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

var _baseControlStyle = require('../../../elements/form/ControlGroup/baseControlStyle');

var _componentHelpers = require('../../../utils/componentHelpers');

var _textStyles = require('../../../elements/typography/textStyles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var renderControlGroupLabel = function renderControlGroupLabel(propsFromControlGroup) {
  var text = propsFromControlGroup.text,
      activeColor = propsFromControlGroup.activeColor,
      bgColorFromProps = propsFromControlGroup.bgColor,
      disabled = propsFromControlGroup.disabled,
      controlId = propsFromControlGroup.controlId,
      validationError = propsFromControlGroup.validationError;

  if (!text) {
    return null;
  }
  var labelProps = {
    activeColor: activeColor,
    bgColor: bgColorFromProps,
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
  } else if (assistiveText && !error) {
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

var ControlGroupComponent = function ControlGroupComponent(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ['children']);

  var assistiveText = props.assistiveText,
      labelText = props.labelText,
      activeColor = props.activeColor,
      bgColorFromProps = props.bgColor,
      disabled = props.disabled,
      controlId = props.controlId,
      validationError = props.validationError;

  var labelProps = {
    text: labelText,
    activeColor: activeColor,
    bgColor: bgColorFromProps,
    disabled: disabled,
    controlId: controlId,
    validationError: validationError
  };
  var assistiveProps = {
    assistiveText: assistiveText,
    controlId: controlId,
    validationError: validationError
  };
  return _react2.default.createElement(
    'div',
    (0, _componentHelpers.passThrough)(ControlGroupComponent, props),
    children,
    renderControlGroupLabel(labelProps),
    renderControlGroupAssistive(assistiveProps)
  );
};

exports.ControlGroupComponent = ControlGroupComponent;
ControlGroupComponent.propTypes = Object.assign({
  activeColor: _propTypes2.default.string,
  assistiveText: _propTypes2.default.string,
  bgColor: _propTypes2.default.string,
  children: _propTypes2.default.any.isRequired,
  controlId: _propTypes2.default.string.isRequired,
  disabled: _propTypes2.default.bool,
  labelText: _propTypes2.default.string.isRequired
}, _styledSystem.space.propTypes, {
  validationError: _propTypes2.default.string
}, _textStyles.typography.propTypes);

ControlGroupComponent.defaultProps = {
  activeColor: _baseControlStyle.defaultControlStylesBase.activeColor,
  assistiveText: '',
  bgColor: _baseControlStyle.defaultControlStylesBase.bgColor,
  disabled: false,
  validationError: ''
};