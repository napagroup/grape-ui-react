'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AssistiveText = undefined;

var _templateObject = _taggedTemplateLiteral(['padding: 0 ', ';'], ['padding: 0 ', ';']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _textStyles = require('../../../elements/typography/textStyles');

var _decorators = require('../../../decorators');

var _componentHelpers = require('../../../utils/componentHelpers');

var _globalStyles = require('../../../global-styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _getGlobalStyles = (0, _globalStyles.getGlobalStyles)(),
    gridSchema = _getGlobalStyles.grid;

var padding = gridSchema.gutter;

var AssistiveText = exports.AssistiveText = function AssistiveText(props) {
  var overrides = Object.assign({}, props, {
    sm: true
  });
  var ProtoAssistiveText = (0, _decorators.withBaseStyles)(_styledComponents2.default.div(_templateObject, padding), overrides);
  return _react2.default.createElement(ProtoAssistiveText, (0, _componentHelpers.passThrough)(AssistiveText, props));
};

AssistiveText.propTypes = {
  color: _propTypes2.default.string,
  fontFamily: _propTypes2.default.string,
  fontWeight: _propTypes2.default.string,
  kerning: _propTypes2.default.string,
  lg: _propTypes2.default.bool,
  sm: _propTypes2.default.bool,
  textAlign: _propTypes2.default.string,
  textDecoration: _propTypes2.default.string
};

AssistiveText.defaultProps = {
  color: _textStyles.defaultTextStylesBase.color,
  fontFamily: _textStyles.defaultTextStylesBase.fontFamily,
  fontWeight: _textStyles.defaultTextStylesBase.fontWeight,
  kerning: _textStyles.defaultTextStylesBase.kerning,
  lg: _textStyles.defaultTextStylesBase.lg,
  sm: _textStyles.defaultTextStylesBase.sm,
  textAlign: _textStyles.defaultTextStylesBase.textAlign,
  textDecoration: _textStyles.defaultTextStylesBase.textDecoration
};