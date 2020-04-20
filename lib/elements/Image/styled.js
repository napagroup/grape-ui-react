"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.Image = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledSystem = require("styled-system");

var _propTypes2 = _interopRequireDefault(require("@styled-system/prop-types"));

var _component = require("./component");

const Image = (0, _styledComponents.default)(_component.ImageComponent)`${_styledSystem.layout}`;
exports.Image = Image;
Image.propTypes = {
  /** Required for web accessibility. Should be short and descriptive. */
  alt: _propTypes.default.string.isRequired,
  maxWidth: _propTypes.default.string,
  ..._propTypes2.default.layout
};
Image.defaultProps = {
  maxWidth: '100%',
  width: '100%'
};
/** @component */