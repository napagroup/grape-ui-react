'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ControlLabel = undefined;

var _templateObject = _taggedTemplateLiteral(['', ''], ['', '']);

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

var ControlLabel = exports.ControlLabel = function ControlLabel(props) {
  var overrides = Object.assign({}, props, {
    sm: true
  });
  var controlLabelStyle = '\n    position: absolute;\n    padding: 0 ' + padding + ';\n    background-color: white;\n    top: -' + padding + ';\n    left: ' + padding + ';\n  ';
  var ProtoControlLabel = (0, _decorators.withBaseStyles)(_styledComponents2.default.label(_templateObject, controlLabelStyle), overrides);
  return _react2.default.createElement(ProtoControlLabel, (0, _componentHelpers.passThrough)(ControlLabel, props));
};

ControlLabel.propTypes = {
  color: _propTypes2.default.string,
  fontFamily: _propTypes2.default.string,
  fontWeight: _propTypes2.default.string,
  kerning: _propTypes2.default.string,
  lg: _propTypes2.default.bool,
  sm: _propTypes2.default.bool,
  textAlign: _propTypes2.default.string,
  textDecoration: _propTypes2.default.string
};

ControlLabel.defaultProps = {
  color: _textStyles.defaultTextStylesBase.color,
  fontFamily: _textStyles.defaultTextStylesBase.fontFamily,
  fontWeight: _textStyles.defaultTextStylesBase.fontWeight,
  kerning: _textStyles.defaultTextStylesBase.kerning,
  lg: _textStyles.defaultTextStylesBase.lg,
  sm: _textStyles.defaultTextStylesBase.sm,
  textAlign: _textStyles.defaultTextStylesBase.textAlign,
  textDecoration: _textStyles.defaultTextStylesBase.textDecoration
};