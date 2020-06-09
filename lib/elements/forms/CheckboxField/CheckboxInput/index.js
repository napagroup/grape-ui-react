"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty2 = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty2(exports, "__esModule", {
  value: true
});

exports.CheckboxInput = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-property"));

var _defineProperties = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-properties"));

var _getOwnPropertyDescriptors = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors"));

var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));

var _getOwnPropertyDescriptor = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor"));

var _filter = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/filter"));

var _getOwnPropertySymbols = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols"));

var _defineProperty3 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/extends"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledHelpers = require("../../../../utils/styledHelpers");

var _componentHelpers = require("../../../../utils/componentHelpers");

var _globalStyles = require("../../../../global-styles");

var _CheckboxLabel = require("../CheckboxLabel");

function ownKeys(object, enumerableOnly) { var keys = (0, _keys.default)(object); if (_getOwnPropertySymbols.default) { var symbols = (0, _getOwnPropertySymbols.default)(object); if (enumerableOnly) symbols = (0, _filter.default)(symbols).call(symbols, function (sym) { return (0, _getOwnPropertyDescriptor.default)(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; (0, _forEach.default)(_context = ownKeys(Object(source), true)).call(_context, function (key) { (0, _defineProperty3.default)(target, key, source[key]); }); } else if (_getOwnPropertyDescriptors.default) { (0, _defineProperties.default)(target, (0, _getOwnPropertyDescriptors.default)(source)); } else { var _context2; (0, _forEach.default)(_context2 = ownKeys(Object(source))).call(_context2, function (key) { (0, _defineProperty2.default)(target, key, (0, _getOwnPropertyDescriptor.default)(source, key)); }); } } return target; }

const _getGlobalStyles = (0, _globalStyles.getGlobalStyles)(),
      gutter = _getGlobalStyles.grid.gutter;

const commonPropsToTrim = ['controlId', 'controlLabelProps', 'hasSelectAll', 'inputRef', 'plainText', 'setValue', 'wrapperProps'];
const propsToTrimLabel = [...commonPropsToTrim, 'name', 'onChange', 'option'];
const propsToTrimControl = [...commonPropsToTrim, ...(0, _keys.default)(_styledHelpers.typography.propTypes), ...(0, _keys.default)(_styledHelpers.flexboxProps.propTypes)];

const CheckboxInput = props => {
  const inputRef = props.inputRef,
        disabled = props.disabled,
        option = props.option;
  const propsForCheckboxLabel = (0, _componentHelpers.removeSomeProps)((0, _componentHelpers.passThrough)(CheckboxInput, props), propsToTrimLabel);
  const propsForCheckboxControl = (0, _componentHelpers.removeSomeProps)((0, _componentHelpers.passThrough)(CheckboxInput, props), propsToTrimControl);
  const stylePropsForCheckBox = {
    cursor: 'pointer',
    marginRight: (0, _styledHelpers.scaleFont)(gutter, 0.5)
  };
  return /*#__PURE__*/_react.default.createElement(_CheckboxLabel.CheckboxLabel, (0, _extends2.default)({
    key: "".concat(option.label, "-label")
  }, propsForCheckboxLabel), /*#__PURE__*/_react.default.createElement("input", (0, _extends2.default)({
    key: option.label,
    ref: inputRef,
    disabled: disabled,
    id: option.value
  }, propsForCheckboxControl, {
    style: stylePropsForCheckBox,
    type: "checkbox"
  })), option.label);
};

exports.CheckboxInput = CheckboxInput;
CheckboxInput.propTypes = _objectSpread({
  disabled: _propTypes.default.bool,
  inputRef: _styledHelpers.refType,
  option: _propTypes.default.any.isRequired
}, _styledHelpers.typography.propTypes);
CheckboxInput.defaultProps = {
  disabled: false,
  inputRef: () => {}
};