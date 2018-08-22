'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Box = undefined;

var _templateObject = _taggedTemplateLiteral([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _textStyles = require('../../elements/typography/textStyles');

var _componentHelpers = require('../../utils/componentHelpers');

var _styledSystem = require('styled-system');

var _decorators = require('../../decorators');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Box = exports.Box = function Box(props, context) {
  var theme = context.theme;

  var overrides = Object.assign({}, props, {
    fontSizeBase: '100%',
    theme: theme
  });
  var BaseBox = (0, _decorators.withBaseStyles)(_styledComponents2.default.div(_templateObject), overrides);
  var ProtoBox = (0, _decorators.withStyledSystem)(BaseBox, overrides);
  return _react2.default.createElement(ProtoBox, (0, _componentHelpers.passThrough)(Box, props));
};
Box.contextTypes = {
  theme: _propTypes2.default.any
};

Box.propTypes = Object.assign({
  color: _propTypes2.default.string,
  fontFamily: _propTypes2.default.string,
  fontWeight: _propTypes2.default.string,
  kerning: _propTypes2.default.string,
  lg: _propTypes2.default.bool,
  sm: _propTypes2.default.bool,
  textAlign: _propTypes2.default.string,
  textDecoration: _propTypes2.default.string
}, _styledSystem.display.propTypes, _styledSystem.height.propTypes, _styledSystem.maxHeight.propTypes, _styledSystem.minHeight.propTypes, _styledSystem.width.propTypes, _styledSystem.maxWidth.propTypes, _styledSystem.minWidth.propTypes, _styledSystem.position.propTypes, _styledSystem.size.propTypes, _styledSystem.ratio.propTypes, _styledSystem.zIndex.propTypes, _styledSystem.top.propTypes, _styledSystem.right.propTypes, _styledSystem.bottom.propTypes, _styledSystem.left.propTypes);

Box.defaultProps = {
  color: _textStyles.defaultTextStylesBase.color,
  fontFamily: _textStyles.defaultTextStylesBase.fontFamily,
  fontWeight: _textStyles.defaultTextStylesBase.fontWeight,
  kerning: _textStyles.defaultTextStylesBase.kerning,
  lg: _textStyles.defaultTextStylesBase.lg,
  sm: _textStyles.defaultTextStylesBase.sm,
  textAlign: _textStyles.defaultTextStylesBase.textAlign,
  textDecoration: _textStyles.defaultTextStylesBase.textDecoration
};