"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.ControlLabelComponent = void 0;

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _componentHelpers = require("../../../../utils/componentHelpers");

var _styledHelpers = require("../../../../utils/styledHelpers");

const propsToTrim = { ..._styledHelpers.layoutProps.propTypes,
  ..._styledHelpers.positionProps.propTypes,
  ..._styledHelpers.spaceProps.propTypes,
  ..._styledHelpers.typography.propTypes,
  activeColor: '',
  disabled: false,
  validationError: ''
};

const ControlLabelComponent = ({
  children,
  ...props
}) =>
/*#__PURE__*/
// eslint-disable-next-line jsx-a11y/label-has-associated-control, jsx-a11y/label-has-for
_react.default.createElement("label", (0, _componentHelpers.removeSomeProps)(props, (0, _keys.default)(propsToTrim)), children);

exports.ControlLabelComponent = ControlLabelComponent;
ControlLabelComponent.propTypes = {
  children: _propTypes.default.any
};
ControlLabelComponent.defaultProps = {
  children: null
};