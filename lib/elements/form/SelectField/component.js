'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectComponent = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _textStyles = require('../../../elements/typography/textStyles');

var _baseControlStyle = require('../../../elements/form/ControlGroup/baseControlStyle');

var _componentHelpers = require('../../../utils/componentHelpers');

var _reactSelect = require('react-select');

var _reactSelect2 = _interopRequireDefault(_reactSelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

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

var SelectComponent = function SelectComponent(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ['children']);

  var isDisabled = props.isDisabled,
      multiple = props.multiple;

  return _react2.default.createElement(
    _reactSelect2.default,
    _extends({
      className: 'grape-ui-select-container',
      classNamePrefix: 'grape-ui-select',
      isDisabled: isDisabled,
      isMulti: multiple,
      styles: styleOverrides
    }, (0, _componentHelpers.passThrough)(SelectComponent, props)),
    children
  );
};
exports.SelectComponent = SelectComponent;
SelectComponent.propTypes = Object.assign({}, _baseControlStyle.control.propTypes, {
  chipBg: _propTypes2.default.string,
  isDisabled: _propTypes2.default.bool,
  menuFocusBg: _propTypes2.default.string,
  menuFocusColor: _propTypes2.default.string,
  menuSelectedBg: _propTypes2.default.string,
  menuSelectedColor: _propTypes2.default.string,
  multiple: _propTypes2.default.bool
}, _textStyles.typography.propTypes, {
  validationError: _propTypes2.default.string
});
SelectComponent.defaultProps = Object.assign({
  chipBg: 'white.dark'
}, _baseControlStyle.defaultControlStylesBase, _textStyles.defaultTextStylesBase, {
  isDisabled: false,
  menuFocusBg: 'brandLinkHover',
  menuFocusColor: 'white',
  menuSelectedBg: 'brandLink',
  menuSelectedColor: 'white',
  multiple: false,
  validationError: ''
});