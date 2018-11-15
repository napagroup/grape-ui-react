'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectFieldComponent = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    ', '\n    ', '\n    ', '\n    ', '\n  '], ['\n    ', '\n    ', '\n    ', '\n    ', '\n  ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _textStyles = require('../../../elements/typography/textStyles');

var _baseControlStyle = require('../ControlGroup/baseControlStyle');

var _componentHelpers = require('../../../utils/componentHelpers');

var _reactSelect = require('react-select');

var _reactSelect2 = _interopRequireDefault(_reactSelect);

var _stateManager = require('react-select/lib/stateManager');

var _stateManager2 = _interopRequireDefault(_stateManager);

var _styledSystem = require('styled-system');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SelectFieldComponent = exports.SelectFieldComponent = function SelectFieldComponent(props) {
  var chipBg = props.chipBg,
      isDisabled = props.isDisabled,
      isFocused = props.isFocused,
      menuFocusBg = props.menuFocusBg,
      menuFocusColor = props.menuFocusColor,
      menuSelectedBg = props.menuSelectedBg,
      menuSelectedColor = props.menuSelectedColor,
      multiple = props.multiple,
      placeholderColor = props.placeholderColor,
      validationError = props.validationError;

  var textBase = (0, _textStyles.textStylesBase)(props);
  var getControlStyle = function getControlStyle() {
    if (!validationError && !isDisabled) {
      return (0, _baseControlStyle.controlStylesBase)(props);
    } else if (validationError) {
      return (0, _baseControlStyle.controlStylesBase)(Object.assign({}, props, { borderColor: (0, _componentHelpers.resolveColor)('brandDanger'), activeColor: (0, _componentHelpers.resolveColor)('brandDanger') }));
    }
    return (0, _baseControlStyle.controlStylesBase)(Object.assign({}, props, { borderColor: (0, _componentHelpers.resolveColor)('white.light'), activeColor: (0, _componentHelpers.resolveColor)('white.light') }));
  };
  var controlBase = getControlStyle();
  var getFocusStyle = function getFocusStyle() {
    if (isFocused) {
      return (0, _baseControlStyle.focusStylesBase)(props);
    }
    return '';
  };
  var focusBase = getFocusStyle();
  var reactSelectStylesOverrides = '\n    .grape-ui-select__control {\n      display: flex;\n    }\n    .grape-ui-select__indicator {\n      padding: 0;\n    }\n    .grape-ui-select__indicator-separator {\n      display: none;\n    }\n    .grape-ui-select__value-container {\n      padding: 0;\n    }\n    .grape-ui-select__menu {\n      position: absolute;\n      left: 0;\n      margin: 0;\n      padding: 0.5rem 0;\n      ' + (0, _componentHelpers.resolveElevation)('03') + '\n    }\n    .grape-ui-select__option {\n      padding: 0.5rem 1rem;\n    }\n    .grape-ui-select__option--is-focused {\n      background: ' + (0, _componentHelpers.resolveColor)(menuFocusBg) + ';\n      color: ' + (0, _componentHelpers.resolveColor)(menuFocusColor) + ';\n    }\n    .grape-ui-select__option--is-selected {\n      background: ' + (0, _componentHelpers.resolveColor)(menuSelectedBg) + ';\n      color: ' + (0, _componentHelpers.resolveColor)(menuSelectedColor) + ';\n    }\n    .grape-ui-select__placeholder {\n      color: ' + (0, _componentHelpers.resolveColor)(placeholderColor) + ';\n    }\n    .grape-ui-select__multi-value {\n      display: flex;\n      margin-right: 0.25rem;\n      padding: 0.25rem;\n      border-radius: 4px;\n      background-color: ' + (0, _componentHelpers.resolveColor)(chipBg) + ';\n      font-size: 80%;\n    }\n    .grape-ui-select__multi-value__label {\n      padding: 0 0.25rem;\n    }\n    .grape-ui-select__multi-value__remove {\n      cursor: pointer;\n      &:hover path {\n        fill: ' + (0, _componentHelpers.resolveColor)('brandLinkHover') + '\n      }\n    }\n  ';

  var styleOverrides = {
    control: function control(styles) {
      return null;
    },
    option: function option(styles) {
      return null;
    },
    input: function input(styles) {
      return null;
    },
    multiValue: function multiValue(styles) {
      return null;
    },
    multiValueLabel: function multiValueLabel(styles) {
      return null;
    },
    multiValueRemove: function multiValueRemove(styles) {
      return null;
    },
    placeholder: function placeholder(styles) {
      return null;
    },
    singleValue: function singleValue(styles) {
      return null;
    }
  };

  var ProtoBase = (0, _styledComponents2.default)(_reactSelect2.default).attrs({
    isDisabled: isDisabled,
    isMulti: multiple,
    styles: styleOverrides,
    className: 'grape-ui-select-container',
    classNamePrefix: 'grape-ui-select'
  })(_templateObject, textBase, controlBase, focusBase, reactSelectStylesOverrides);

  return _react2.default.createElement(ProtoBase, (0, _componentHelpers.passThrough)(SelectFieldComponent, props));
};

SelectFieldComponent.propTypes = {
  activeColor: _propTypes2.default.string,
  borderColor: _propTypes2.default.string,
  borderRadius: _propTypes2.default.string,
  chipBg: _propTypes2.default.string,
  color: _propTypes2.default.string,
  fontFamily: _propTypes2.default.string,
  fontWeight: _propTypes2.default.string,
  isDisabled: _propTypes2.default.bool,
  isFocused: _propTypes2.default.bool,
  kerning: _propTypes2.default.string,
  lg: _propTypes2.default.bool,
  menuFocusBg: _propTypes2.default.string,
  menuFocusColor: _propTypes2.default.string,
  menuSelectedBg: _propTypes2.default.string,
  menuSelectedColor: _propTypes2.default.string,
  multiple: _propTypes2.default.bool,
  padding: _propTypes2.default.string,
  placeholderColor: _propTypes2.default.string,
  sm: _propTypes2.default.bool,
  textAlign: _propTypes2.default.string,
  textDecoration: _propTypes2.default.string,
  validationError: _propTypes2.default.string
};

SelectFieldComponent.defaultProps = {
  activeColor: _baseControlStyle.defaultControlStylesBase.activeColor,
  borderColor: _baseControlStyle.defaultControlStylesBase.borderColor,
  borderRadius: _baseControlStyle.defaultControlStylesBase.borderRadius,
  chipBg: 'white.dark',
  color: _textStyles.defaultTextStylesBase.color,
  fontFamily: _textStyles.defaultTextStylesBase.fontFamily,
  fontWeight: _textStyles.defaultTextStylesBase.fontWeight,
  kerning: _textStyles.defaultTextStylesBase.kerning,
  isDisabled: false,
  isFocused: _baseControlStyle.defaultControlStylesBase.isFocused,
  lg: _textStyles.defaultTextStylesBase.lg,
  menuFocusBg: 'brandLinkHover',
  menuFocusColor: 'white',
  menuSelectedBg: 'brandLink',
  menuSelectedColor: 'white',
  multiple: false,
  padding: _baseControlStyle.defaultControlStylesBase.padding,
  placeholderColor: _baseControlStyle.defaultControlStylesBase.placeholderColor,
  sm: _textStyles.defaultTextStylesBase.sm,
  textAlign: _textStyles.defaultTextStylesBase.textAlign,
  textDecoration: _textStyles.defaultTextStylesBase.textDecoration,
  validationError: ''
};