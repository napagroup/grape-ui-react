"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.FormComponent = exports.applyFormStyleToChild = void 0;

var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/map"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _componentHelpers = require("../../../utils/componentHelpers");

var _propTypes2 = _interopRequireDefault(require("@styled-system/prop-types"));

const formComponentPropsToRemove = { ..._propTypes2.default.flexbox,
  ..._propTypes2.default.layout,
  ..._propTypes2.default.position,
  ..._propTypes2.default.space,
  formInline: false
};

const applyFormStyleToChild = (child, formStyleFromParent) => {
  const {
    formStyle
  } = child.props;
  let output; // Only TextField will try to apply form style

  if (formStyle || child.type.name !== 'TextField' && child.type.name !== 'SelectField') {
    output = child;
  } else {
    output = _react.default.cloneElement(child, {
      formStyle: formStyleFromParent
    });
  }

  return output;
};

exports.applyFormStyleToChild = applyFormStyleToChild;

const FormComponent = ({
  children,
  formStyle,
  ...props
}) => {
  let output = null;

  if (!formStyle) {
    output = /*#__PURE__*/_react.default.createElement("form", (0, _componentHelpers.removeSomeProps)(props, (0, _keys.default)(formComponentPropsToRemove)), children);
  } else {
    var _context;

    const childrenWithProps = (0, _map.default)(_context = _react.default.Children).call(_context, children, child => applyFormStyleToChild(child, formStyle));
    output = /*#__PURE__*/_react.default.createElement("form", (0, _componentHelpers.removeSomeProps)(props, (0, _keys.default)(formComponentPropsToRemove)), childrenWithProps);
  }

  return output;
};

exports.FormComponent = FormComponent;
FormComponent.propTypes = {
  children: _propTypes.default.any,
  formStyle: _propTypes.default.string
};
FormComponent.defaultProps = {
  children: null,
  formStyle: ''
};