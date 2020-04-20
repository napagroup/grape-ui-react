"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.ImageComponent = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/extends"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _componentHelpers = require("../../utils/componentHelpers");

var _reactImage = _interopRequireDefault(require("react-image"));

var _styledHelpers = require("../../utils/styledHelpers");

const componentPropsToRemove = { ..._styledHelpers.layoutProps.propTypes,
  ..._styledHelpers.spaceProps.propTypes
};

const ImageComponent = ({
  alt,
  ...props
}) => /*#__PURE__*/_react.default.createElement(_reactImage.default, (0, _extends2.default)({
  alt: alt
}, (0, _componentHelpers.removeSomeProps)(props, (0, _keys.default)(componentPropsToRemove))));

exports.ImageComponent = ImageComponent;
ImageComponent.propTypes = {
  alt: _propTypes.default.string
};
ImageComponent.defaultProps = {
  alt: ''
};