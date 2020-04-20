"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.ParagraphComponent = void 0;

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledHelpers = require("../../../utils/styledHelpers");

var _componentHelpers = require("../../../utils/componentHelpers");

const propsToTrim = {
  lead: '',
  ..._styledHelpers.spaceProps.propTypes,
  ..._styledHelpers.typography.propTypes
};

const ParagraphComponent = ({
  children,
  ...props
}) => /*#__PURE__*/_react.default.createElement("p", (0, _componentHelpers.removeSomeProps)(props, (0, _keys.default)(propsToTrim)), children);

exports.ParagraphComponent = ParagraphComponent;
ParagraphComponent.propTypes = {
  children: _propTypes.default.any.isRequired,
  lead: _propTypes.default.bool
};
ParagraphComponent.defaultProps = {
  lead: false
};