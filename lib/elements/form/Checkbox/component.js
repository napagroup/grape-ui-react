'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckboxFieldComponent = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n'], ['\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _textStyles = require('../../../elements/typography/textStyles');

var _componentHelpers = require('../../../utils/componentHelpers');

var _reactCheckboxGroup = require('react-checkbox-group');

var _PlainText = require('../../../elements/form/PlainText');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CheckboxLabel = _styledComponents2.default.label(_templateObject, _textStyles.getFontFamily, _textStyles.getFontSize, _textStyles.getFontWeight, _textStyles.getLetterSpacing, _textStyles.getLineHeight, _textStyles.getFontStyle, _textStyles.getColor, _textStyles.getTextAlign, _textStyles.getTextDecoration);

var SingleCheckBox = function SingleCheckBox(props) {
  var disabled = props.disabled,
      option = props.option;

  var propsForChildren = (0, _componentHelpers.removeSomeProps)((0, _componentHelpers.passThrough)(_reactCheckboxGroup.Checkbox, props), ['controlId', 'plainText', 'name', 'onChange', 'option']);
  return _react2.default.createElement(
    CheckboxLabel,
    _extends({ key: option.label + '-label' }, propsForChildren),
    _react2.default.createElement(_reactCheckboxGroup.Checkbox, _extends({ key: option.label, disabled: disabled, id: option.value }, propsForChildren, { value: option.value })),
    option.label
  );
};
SingleCheckBox.propTypes = {
  disabled: _propTypes2.default.bool,
  option: _propTypes2.default.any.isRequired
};
SingleCheckBox.defaultProps = {
  disabled: false
};

var CheckboxFieldComponent = exports.CheckboxFieldComponent = function CheckboxFieldComponent(props) {
  var plainText = props.plainText,
      options = props.options,
      controlId = props.controlId,
      onChange = props.onChange,
      value = props.value,
      name = props.name;

  if (plainText) {
    var plainTextProps = Object.assign({
      value: value
    }, (0, _componentHelpers.removeSomeProps)(props, ['controlId', 'labelText', 'assistiveText', 'name', 'onChange', 'options', 'plainText', 'validationError']));
    return _react2.default.createElement(_PlainText.PlainText, plainTextProps);
  }
  var checkboxProps = (0, _componentHelpers.removeSomeProps)(props, ['controlId', 'plainText', 'name', 'onChange', 'options']);
  var optionsList = options.map(function (option) {
    return SingleCheckBox(Object.assign({}, checkboxProps, { option: option }));
  });
  return _react2.default.createElement(
    _reactCheckboxGroup.CheckboxGroup,
    { checkboxDepth: 2, id: controlId, name: name, onChange: onChange, value: value },
    ' ',
    optionsList,
    ' '
  );
};

CheckboxFieldComponent.propTypes = {
  controlId: _propTypes2.default.string,
  name: _propTypes2.default.string,
  onChange: _propTypes2.default.func,
  options: _propTypes2.default.any.isRequired,
  plainText: _propTypes2.default.bool,
  value: _propTypes2.default.any
};

CheckboxFieldComponent.defaultProps = {
  controlId: '',
  name: '',
  onChange: null,
  plainText: false,
  value: null
};