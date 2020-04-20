"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty2 = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

require("core-js/modules/es.function.name");

_Object$defineProperty2(exports, "__esModule", {
  value: true
});

exports.FormComponent = exports.applyFormStyleToChild = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-property"));

var _defineProperties = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-properties"));

var _getOwnPropertyDescriptors = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors"));

var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));

var _getOwnPropertyDescriptor = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor"));

var _filter = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/filter"));

var _getOwnPropertySymbols = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols"));

var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/map"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/objectWithoutProperties"));

var _defineProperty3 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _componentHelpers = require("../../../utils/componentHelpers");

var _propTypes2 = _interopRequireDefault(require("@styled-system/prop-types"));

function ownKeys(object, enumerableOnly) { var keys = (0, _keys["default"])(object); if (_getOwnPropertySymbols["default"]) { var symbols = (0, _getOwnPropertySymbols["default"])(object); if (enumerableOnly) symbols = (0, _filter["default"])(symbols).call(symbols, function (sym) { return (0, _getOwnPropertyDescriptor["default"])(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context2; (0, _forEach["default"])(_context2 = ownKeys(Object(source), true)).call(_context2, function (key) { (0, _defineProperty3["default"])(target, key, source[key]); }); } else if (_getOwnPropertyDescriptors["default"]) { (0, _defineProperties["default"])(target, (0, _getOwnPropertyDescriptors["default"])(source)); } else { var _context3; (0, _forEach["default"])(_context3 = ownKeys(Object(source))).call(_context3, function (key) { (0, _defineProperty2["default"])(target, key, (0, _getOwnPropertyDescriptor["default"])(source, key)); }); } } return target; }

var formComponentPropsToRemove = _objectSpread({}, _propTypes2["default"].flexbox, {}, _propTypes2["default"].layout, {}, _propTypes2["default"].position, {}, _propTypes2["default"].space, {
  formInline: false
});

var applyFormStyleToChild = function applyFormStyleToChild(child, formStyleFromParent) {
  var formStyle = child.props.formStyle;
  var output; // Only TextField will try to apply form style

  if (formStyle || child.type.name !== 'TextField' && child.type.name !== 'SelectField') {
    output = child;
  } else {
    output = _react["default"].cloneElement(child, {
      formStyle: formStyleFromParent
    });
  }

  return output;
};

exports.applyFormStyleToChild = applyFormStyleToChild;

var FormComponent = function FormComponent(_ref) {
  var children = _ref.children,
      formStyle = _ref.formStyle,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["children", "formStyle"]);
  var output = null;

  if (!formStyle) {
    output = /*#__PURE__*/_react["default"].createElement("form", (0, _componentHelpers.removeSomeProps)(props, (0, _keys["default"])(formComponentPropsToRemove)), children);
  } else {
    var _context;

    var childrenWithProps = (0, _map["default"])(_context = _react["default"].Children).call(_context, children, function (child) {
      return applyFormStyleToChild(child, formStyle);
    });
    output = /*#__PURE__*/_react["default"].createElement("form", (0, _componentHelpers.removeSomeProps)(props, (0, _keys["default"])(formComponentPropsToRemove)), childrenWithProps);
  }

  return output;
};

exports.FormComponent = FormComponent;
FormComponent.propTypes = {
  children: _propTypes["default"].any,
  formStyle: _propTypes["default"].string
};
FormComponent.defaultProps = {
  children: null,
  formStyle: ''
};