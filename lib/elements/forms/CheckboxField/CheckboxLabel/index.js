"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.CheckboxLabel = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/taggedTemplateLiteral"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _propTypes2 = _interopRequireDefault(require("@styled-system/prop-types"));

var _styledHelpers = require("../../../../utils/styledHelpers");

var _componentHelpers = require("../../../../utils/componentHelpers");

var _globalStyles = require("../../../../global-styles");

function _templateObject() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  cursor: pointer;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

const _getGlobalStyles = (0, _globalStyles.getGlobalStyles)(),
      gutter = _getGlobalStyles.grid.gutter;

const opacity = props => "".concat(props.disabled ? 'opacity: 0.6;' : '');

const CheckboxLabelComponent = (_ref) => {
  let children = _ref.children,
      props = (0, _objectWithoutProperties2.default)(_ref, ["children"]);
  const propsToTrim = [...(0, _keys.default)(_styledHelpers.typography.propTypes), ...(0, _keys.default)(_propTypes2.default.flexbox), ...(0, _keys.default)(_propTypes2.default.layout), ...(0, _keys.default)(_propTypes2.default.space), 'controlGroupProps'];
  const labelProps = (0, _componentHelpers.removeSomeProps)(props, propsToTrim);
  return (
    /*#__PURE__*/
    // eslint-disable-next-line jsx-a11y/label-has-associated-control, jsx-a11y/label-has-for
    _react.default.createElement("label", labelProps, children)
  );
};

CheckboxLabelComponent.propTypes = {
  children: _propTypes.default.any
};
CheckboxLabelComponent.defaultProps = {
  children: null
};
const CheckboxLabel = (0, _styledComponents.default)(CheckboxLabelComponent)(_templateObject(), _styledHelpers.colorCore, _styledHelpers.ellipsisCore, _styledHelpers.fontFamilyCore, _styledHelpers.fontSizeCore, _styledSystem.fontWeight, _styledSystem.layout, _styledHelpers.letterSpacingCore, _styledHelpers.lineHeightCore, _styledHelpers.fontStyleCore, _styledHelpers.textAlignCore, _styledHelpers.textDecorationCore, opacity, _styledSystem.space);
exports.CheckboxLabel = CheckboxLabel;
CheckboxLabel.defaultProps = {
  display: 'inline-block',
  mr: (0, _styledHelpers.scaleFont)(gutter, 1)
};