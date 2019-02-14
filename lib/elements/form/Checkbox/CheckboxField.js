'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckboxField = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral([' ', ' ', ''], [' ', ' ', '']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ControlLabel = require('../../../elements/form/ControlLabel');

var _ControlGroup = require('../../../elements/form/ControlGroup');

var _componentHelpers = require('../../../utils/componentHelpers');

var _CheckboxFieldComponent = require('./CheckboxFieldComponent');

var _styledSystem = require('styled-system');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _baseControlStyle = require('../ControlGroup/baseControlStyle');

var _textStyles = require('../../../elements/typography/textStyles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var getBgColor = function getBgColor(props) {
  var bgColor = props.bgColor;

  if (!bgColor) {
    return (0, _componentHelpers.resolveColor)(_baseControlStyle.defaultControlStylesBase.bgColor);
  }
  return (0, _componentHelpers.resolveColor)(bgColor);
};

var CheckboxField = function CheckboxField(props) {
  var activeColor = props.activeColor,
      controlId = props.controlId,
      disabled = props.disabled,
      defaultValue = props.defaultValue,
      plainText = props.plainText,
      value = props.value,
      labelText = props.labelText,
      required = props.required,
      validationError = props.validationError,
      otherProps = _objectWithoutProperties(props, ['activeColor', 'controlId', 'disabled', 'defaultValue', 'plainText', 'value', 'labelText', 'required', 'validationError']);

  var preSpaceProps = Object.assign({
    pb: 3,
    pt: 1
  }, otherProps);
  var spaceProps = Object.assign({}, (0, _styledSystem.space)(preSpaceProps));
  var otherWithoutSpaceProps = (0, _componentHelpers.removeSomeProps)(otherProps, spaceProps);
  var childProps = Object.assign({ id: controlId }, (0, _componentHelpers.passThrough)(CheckboxField, otherWithoutSpaceProps));
  var newlabel = !required ? labelText : labelText + '*';

  var getDisplayValue = function getDisplayValue() {
    if (value) {
      return value.toString();
    }
    return '';
  };

  var renderValueOrComponent = function renderValueOrComponent() {
    if (plainText) {
      var textBase = (0, _textStyles.textStylesBase)(props);
      var displayString = getDisplayValue();
      var controlBase = (0, _baseControlStyle.controlStylesBase)(Object.assign({}, props, { borderColor: (0, _componentHelpers.resolveColor)('brandDanger'), activeColor: (0, _componentHelpers.resolveColor)('brandDanger') }));
      var ProtoPlainText = _styledComponents2.default.div.attrs({})(_templateObject, textBase, controlBase);
      return _react2.default.createElement(
        ProtoPlainText,
        (0, _componentHelpers.passThrough)(ProtoPlainText, props),
        displayString
      );
    }
    return _react2.default.createElement(_CheckboxFieldComponent.CheckboxFieldComponent, _extends({}, childProps, { disabled: disabled, value: value || defaultValue }));
  };
  return _react2.default.createElement(
    _ControlGroup.ControlGroup,
    null,
    _react2.default.createElement(
      _ControlLabel.ControlLabel,
      {
        activeColor: activeColor,
        bgColor: getBgColor(props),
        disabled: disabled,
        htmlFor: controlId,
        validationError: validationError
      },
      newlabel
    ),
    renderValueOrComponent()
  );
};

exports.CheckboxField = CheckboxField;
CheckboxField.propTypes = Object.assign({
  activeColor: _propTypes2.default.string,
  assistiveText: _propTypes2.default.string,
  bgColor: _propTypes2.default.string,
  controlId: _propTypes2.default.string.isRequired,
  labelText: _propTypes2.default.string.isRequired,
  disabled: _propTypes2.default.bool,
  plainText: _propTypes2.default.bool,
  validationError: _propTypes2.default.string
}, _styledSystem.space.propTypes);

CheckboxField.defaultProps = {
  activeColor: _baseControlStyle.defaultControlStylesBase.activeColor,
  assistiveText: '',
  bgColor: _baseControlStyle.defaultControlStylesBase.bgColor,
  disabled: false,
  plainText: false,
  validationError: ''
};