'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextField = exports.TextFieldComponent = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  '], ['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ControlGroup = require('../../../elements/form/ControlGroup');

var _componentHelpers = require('../../../utils/componentHelpers');

var _styledSystem = require('styled-system');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledHelpers = require('../../../utils/styledHelpers');

var _AssistiveText = require('../../../elements/form/AssistiveText');

var _component = require('./component');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var controlStylesTextField = function controlStylesTextField(props) {
  return !props.validationError ? (0, _styledHelpers.controlStyles)(props) : (0, _styledHelpers.controlStyles)(Object.assign({}, props, { activeColor: 'brandDanger', borderColor: 'brandDanger' }));
};

var TextFieldComponent = exports.TextFieldComponent = (0, _styledComponents2.default)(_component.TextInputComponent)(_templateObject, _styledHelpers.colorCore, _styledHelpers.fontFamilyCore, _styledHelpers.fontSizeCore, _styledSystem.fontWeight, _styledHelpers.letterSpacingCore, _styledHelpers.lineHeightCore, _styledHelpers.fontStyleCore, _styledHelpers.textAlignCore, _styledHelpers.textDecorationCore, controlStylesTextField);

TextFieldComponent.propTypes = Object.assign({
  formStyle: _propTypes2.default.string
}, _styledHelpers.control.propTypes, _styledHelpers.typography.propTypes);

TextFieldComponent.defaultProps = Object.assign({
  formStyle: ''
}, _styledHelpers.defaultControlStyles);

var propsToTrim = ['activeColor', 'assistiveText', 'controlId', 'labelText', 'validationError'].concat(_toConsumableArray(Object.keys(_styledHelpers.spaceProps.propTypes)));
var TextField = function TextField(props) {
  var activeColor = props.activeColor,
      bg = props.bg,
      controlId = props.controlId,
      labelText = props.labelText,
      required = props.required,
      validationError = props.validationError,
      otherProps = _objectWithoutProperties(props, ['activeColor', 'bg', 'controlId', 'labelText', 'required', 'validationError']);

  var childProps = Object.assign({
    bg: bg,
    id: controlId,
    required: required,
    validationError: validationError
  }, (0, _componentHelpers.removeSomeProps)(otherProps, propsToTrim));
  return _react2.default.createElement(
    _ControlGroup.ControlGroup,
    {
      activeColor: activeColor,
      assistiveText: (0, _AssistiveText.getAssistiveText)(props),
      bg: _styledHelpers.defaultControlStyles.bg,
      controlId: controlId,
      labelText: labelText,
      pb: 3,
      pt: 1,
      validationError: validationError
    },
    _react2.default.createElement(TextFieldComponent, childProps)
  );
};

exports.TextField = TextField;
TextField.propTypes = {
  activeColor: _propTypes2.default.string,
  assistiveText: _propTypes2.default.string,
  bg: _propTypes2.default.string,
  controlId: _propTypes2.default.string.isRequired,
  formStyle: _propTypes2.default.string,
  labelText: _propTypes2.default.string,
  required: _propTypes2.default.bool,
  validationError: _propTypes2.default.string
};

TextField.defaultProps = {
  activeColor: _styledHelpers.defaultControlStyles.activeColor,
  assistiveText: '',
  bg: _styledHelpers.defaultStylesBase.bg,
  formStyle: '',
  labelText: '',
  required: false,
  validationError: ''
};