"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormComponent = exports.applyFormStyleToChild = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _componentHelpers = require("../../../utils/componentHelpers");

var _styledSystem = require("styled-system");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var formComponentPropsToRemove = _objectSpread({}, _styledSystem.display.propTypes, _styledSystem.width.propTypes, {
  formInline: false
});

var applyFormStyleToChild = exports.applyFormStyleToChild = function applyFormStyleToChild(child, formStylefromParent) {
  var formStyle = child.props.formStyle;
  var output; // Only TextField will try to apply form style

  if (formStyle || child.type.name !== 'TextField' && child.type.name !== 'SelectField') {
    output = child;
  } else {
    output = _react2.default.cloneElement(child, {
      formStyle: formStylefromParent
    });
  }

  return output;
};

var FormComponent = exports.FormComponent = function FormComponent(_ref) {
  var children = _ref.children,
      formStyle = _ref.formStyle,
      props = _objectWithoutProperties(_ref, ["children", "formStyle"]);

  var output = null;

  if (!formStyle) {
    output = _react2.default.createElement("form", (0, _componentHelpers.removeSomeProps)(props, Object.keys(formComponentPropsToRemove)), children);
  } else {
    var childrenWithProps = _react2.default.Children.map(children, function (child) {
      return applyFormStyleToChild(child, formStyle);
    });

    output = _react2.default.createElement("form", (0, _componentHelpers.removeSomeProps)(props, Object.keys(formComponentPropsToRemove)), childrenWithProps);
  }

  return output;
};

FormComponent.propTypes = {
  children: _propTypes2.default.any,
  formStyle: _propTypes2.default.string
};
FormComponent.defaultProps = {
  children: null,
  formStyle: ''
};