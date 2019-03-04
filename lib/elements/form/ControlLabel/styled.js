'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ControlLabel = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  left: ', ';\n  padding: 0 ', ';\n  ', ';\n  ', '\n'], ['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  left: ', ';\n  padding: 0 ', ';\n  ', ';\n  ', '\n']);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _globalStyles = require('../../../global-styles');

var _utils = require('../../../elements/typography/utils');

var _styledSystem = require('styled-system');

var _styledHelpers = require('../../../utils/styledHelpers');

var _component = require('./component');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _getGlobalStyles = (0, _globalStyles.getGlobalStyles)(),
    gridSchema = _getGlobalStyles.grid;

var padding = (0, _utils.getScaledSize)(gridSchema.gutter, 0.5);
var colorLabel = function colorLabel(props) {
  return (0, _styledHelpers.colorCore)(Object.assign({}, props, {
    color: !props.validationError ? props.color : 'brandDanger'
  }));
};
var fontSizeLabel = function fontSizeLabel(props) {
  return (0, _styledHelpers.fontSizeCore)(Object.assign({}, props, { sm: true }));
};
var positionStyle = function positionStyle(props) {
  return 'position: ' + (props.isRelative ? 'relative' : 'absolute') + ';';
};
var top = function top(props) {
  return props.isRelative ? '' : 'top: -' + padding + ';';
};
var ControlLabel = exports.ControlLabel = (0, _styledComponents2.default)(_component.ControlLabelComponent)(_templateObject, colorLabel, _styledHelpers.fontFamilyCore, fontSizeLabel, _styledHelpers.fontStyleCore, _styledSystem.fontWeight, _styledHelpers.letterSpacingCore, _styledHelpers.lineHeightCore, _styledHelpers.fontStyleCore, _styledHelpers.textAlignCore, _styledHelpers.textDecorationCore, padding, padding, top, positionStyle);

ControlLabel.propTypes = Object.assign({
  bg: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  isRelative: _propTypes2.default.bool
}, _styledHelpers.typography.propTypes, {
  validationError: _propTypes2.default.string
});

ControlLabel.defaultProps = {
  bg: _styledHelpers.defaultControlStyles.bg,
  disabled: false,
  isRelative: false,
  validationError: ''
};