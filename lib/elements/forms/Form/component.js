"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.for-each");

require("core-js/modules/es.array.index-of");

require("core-js/modules/es.array.map");

require("core-js/modules/es.function.name");

require("core-js/modules/es.object.define-properties");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-own-property-descriptors");

require("core-js/modules/es.object.keys");

require("core-js/modules/web.dom-collections.for-each");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormComponent = exports.applyFormStyleToChild = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _componentHelpers = require("../../../utils/componentHelpers");

var _propTypes2 = _interopRequireDefault(require("@styled-system/prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
      props = _objectWithoutProperties(_ref, ["children", "formStyle"]);

  var output = null;

  if (!formStyle) {
    output = /*#__PURE__*/_react["default"].createElement("form", (0, _componentHelpers.removeSomeProps)(props, Object.keys(formComponentPropsToRemove)), children);
  } else {
    var childrenWithProps = _react["default"].Children.map(children, function (child) {
      return applyFormStyleToChild(child, formStyle);
    });

    output = /*#__PURE__*/_react["default"].createElement("form", (0, _componentHelpers.removeSomeProps)(props, Object.keys(formComponentPropsToRemove)), childrenWithProps);
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