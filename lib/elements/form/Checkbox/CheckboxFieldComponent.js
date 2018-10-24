'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckboxFieldComponent = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral([' ', ' '], [' ', ' ']),
    _templateObject2 = _taggedTemplateLiteral([' ', ' ', ''], [' ', ' ', '']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _textStyles = require('../../../elements/typography/textStyles');

var _componentHelpers = require('../../../utils/componentHelpers');

var _reactCheckboxGroup = require('react-checkbox-group');

var _baseControlStyle = require('../ControlGroup/baseControlStyle');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var CheckboxFieldComponent = function CheckboxFieldComponent(props) {
  var disabled = props.disabled,
      name = props.name,
      onChange = props.onChange,
      plainText = props.plainText,
      value = props.value,
      controlId = props.controlId,
      options = props.options,
      otherProps = _objectWithoutProperties(props, ['disabled', 'name', 'onChange', 'plainText', 'value', 'controlId', 'options']);

  var overrides = Object.assign({}, otherProps);

  var createSingleCheckBox = function createSingleCheckBox(option) {
    var actualBase = (0, _textStyles.textStylesBase)(overrides);
    var CheckboxLabel = _styledComponents2.default.label(_templateObject, actualBase);
    return _react2.default.createElement(
      CheckboxLabel,
      _extends({ key: option.label + '-label' }, (0, _componentHelpers.passThrough)(_reactCheckboxGroup.Checkbox, otherProps)),
      _react2.default.createElement(_reactCheckboxGroup.Checkbox, _extends({ key: option.label, disabled: disabled, id: option.value }, (0, _componentHelpers.passThrough)(_reactCheckboxGroup.Checkbox, otherProps), { value: option.value })),
      option.label
    );
  };

  var getDisplayValue = function getDisplayValue() {
    return value || '';
  };

  var renderCheckboxComponent = function renderCheckboxComponent() {
    if (plainText) {
      var textBase = (0, _textStyles.textStylesBase)(props);
      var displayString = getDisplayValue();
      var controlBase = (0, _baseControlStyle.controlStylesBase)(Object.assign({}, props, { borderColor: (0, _componentHelpers.resolveColor)('brandDanger'), activeColor: (0, _componentHelpers.resolveColor)('brandDanger') }));
      var ProtoPlainText = _styledComponents2.default.div.attrs({})(_templateObject2, textBase, controlBase);
      return _react2.default.createElement(
        ProtoPlainText,
        (0, _componentHelpers.passThrough)(ProtoPlainText, props),
        displayString
      );
    }
    var optionsList = options.map(function (option) {
      return createSingleCheckBox(option);
    });
    return _react2.default.createElement(
      _reactCheckboxGroup.CheckboxGroup,
      { checkboxDepth: 2, id: controlId, name: name, onChange: onChange, value: value },
      ' ',
      optionsList,
      ' '
    );
  };
  return renderCheckboxComponent();
};
exports.CheckboxFieldComponent = CheckboxFieldComponent;