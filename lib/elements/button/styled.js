'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'], ['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n']);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

var _styledHelpers = require('../../utils/styledHelpers');

var _utils = require('./utils');

var _component = require('./component');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// TODO: For Ryan, please put the correct style into for contained, outline and raised here.
var Button = exports.Button = (0, _styledComponents2.default)(_component.ButtonComponent)(_templateObject, _styledSystem.alignContent, _styledSystem.alignItems, _styledSystem.alignSelf, _styledHelpers.colorCore, _utils.borderForButton, _styledSystem.borderWidth, _styledSystem.bottom, _styledSystem.buttonStyle, _styledSystem.display, _styledSystem.flexBasis, _styledSystem.flexDirection, _styledSystem.flexWrap, _styledSystem.fontSize, _styledSystem.height, _styledSystem.justifyContent, _styledSystem.left, _styledSystem.letterSpacing, _utils.lineHeightForButton, _styledSystem.maxHeight, _styledSystem.maxWidth, _styledSystem.minHeight, _styledSystem.minWidth, _utils.positionForButton, _styledSystem.ratio, _styledSystem.right, _styledSystem.size, _styledSystem.space, _styledSystem.textAlign, _styledSystem.top, _styledSystem.width, _styledSystem.zIndex);

Button.propTypes = Object.assign({}, _styledSystem.alignContent.propTypes, _styledSystem.alignItems.propTypes, _styledSystem.alignSelf.propTypes, _styledSystem.border.propTypes, _styledSystem.borderWidth.propTypes, _styledSystem.bottom.propTypes, _styledSystem.color.propTypes, {
  contained: _propTypes2.default.bool
}, _styledSystem.display.propTypes, _styledSystem.flexBasis.propTypes, _styledSystem.flexDirection.propTypes, _styledSystem.flexWrap.propTypes, _styledSystem.fontSize.propTypes, _styledSystem.height.propTypes, {
  href: _propTypes2.default.string
}, _styledSystem.justifyContent.propTypes, _styledSystem.left.propTypes, _styledSystem.letterSpacing.propTypes, _styledSystem.lineHeight.propTypes, _styledSystem.maxHeight.propTypes, _styledSystem.maxWidth.propTypes, _styledSystem.minHeight.propTypes, _styledSystem.minWidth.propTypes, {
  outline: _propTypes2.default.bool
}, _styledSystem.position.propTypes, {
  raised: _propTypes2.default.bool
}, _styledSystem.ratio.propTypes, _styledSystem.right.propTypes, _styledSystem.size.propTypes, _styledSystem.space.propTypes, _styledSystem.textAlign.propTypes, {
  to: _propTypes2.default.string
}, _styledSystem.top.propTypes, _styledSystem.width.propTypes, _styledSystem.zIndex.propTypes);

Button.defaultProps = {
  contained: false,
  href: null,
  outline: false,
  raised: false,
  to: null
};