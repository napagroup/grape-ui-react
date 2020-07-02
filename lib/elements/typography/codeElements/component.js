"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.CodeComponent = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/extends"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactElementToJsxString = _interopRequireDefault(require("react-element-to-jsx-string"));

var _reactSyntaxHighlighter = _interopRequireDefault(require("react-syntax-highlighter"));

var _componentHelpers = require("../../../utils/componentHelpers");

var _utils = require("./utils");

const getCode = props => {
  const code = props.code,
        codeOptions = props.codeOptions;

  if (_react.default.isValidElement(code)) {
    return (0, _reactElementToJsxString.default)(code, codeOptions);
  }

  return code;
};

const CodeComponent = (_ref) => {
  let language = _ref.language,
      style = _ref.style,
      props = (0, _objectWithoutProperties2.default)(_ref, ["language", "style"]);
  return /*#__PURE__*/_react.default.createElement(_reactSyntaxHighlighter.default, (0, _extends2.default)({
    language: language,
    style: style
  }, (0, _componentHelpers.removeSomeProps)(props, (0, _keys.default)(_utils.codePropTypes))), getCode(props));
};

exports.CodeComponent = CodeComponent;
CodeComponent.propTypes = {
  language: _propTypes.default.string,
  style: _propTypes.default.any
};
CodeComponent.defaultProps = {
  language: 'javascript',
  style: _utils.grapeUICustomStyle
};