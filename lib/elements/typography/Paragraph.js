'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Paragraph = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    ', '\n    margin: 0 0 ', ';\n  '], ['\n    ', '\n    margin: 0 0 ', ';\n  ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _textStyles = require('./textStyles');

var _globalStyles = require('../../global-styles');

var _componentHelpers = require('../../utils/componentHelpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var _getGlobalStyles = (0, _globalStyles.getGlobalStyles)(),
    gridSchema = _getGlobalStyles.grid;

var Paragraph = function Paragraph(props) {
  var lead = props.lead,
      otherProps = _objectWithoutProperties(props, ['lead']);

  var leadStyles = null;
  if (lead) {
    leadStyles = {
      fontWeight: '300',
      lg: true
    };
  }
  var overrides = Object.assign({}, otherProps, leadStyles);
  var actualBase = (0, _textStyles.textStylesBase)(overrides);
  var ProtoParagraph = _styledComponents2.default.p(_templateObject, actualBase, gridSchema.gutter);
  return _react2.default.createElement(ProtoParagraph, (0, _componentHelpers.passThrough)(Paragraph, props));
};

exports.Paragraph = Paragraph;
Paragraph.propTypes = {
  color: _propTypes2.default.string,
  fontFamily: _propTypes2.default.string,
  fontWeight: _propTypes2.default.string,
  kerning: _propTypes2.default.string,
  lead: _propTypes2.default.bool,
  lg: _propTypes2.default.bool,
  sm: _propTypes2.default.bool,
  textAlign: _propTypes2.default.string,
  textDecoration: _propTypes2.default.string
};

Paragraph.defaultProps = {
  color: _textStyles.defaultTextStylesBase.color,
  fontFamily: _textStyles.defaultTextStylesBase.fontFamily,
  fontWeight: _textStyles.defaultTextStylesBase.fontWeight,
  kerning: _textStyles.defaultTextStylesBase.kerning,
  lead: false,
  lg: _textStyles.defaultTextStylesBase.lg,
  sm: _textStyles.defaultTextStylesBase.sm,
  textAlign: _textStyles.defaultTextStylesBase.textAlign,
  textDecoration: _textStyles.defaultTextStylesBase.textDecoration
};