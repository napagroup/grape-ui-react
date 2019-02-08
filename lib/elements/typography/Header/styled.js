'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    margin: 0 0 ', ';\n  '], ['\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    margin: 0 0 ', ';\n  ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _globalStyles = require('../../../global-styles');

var _textStyles = require('../textStyles');

var _componentHelpers = require('../../../utils/componentHelpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var _getGlobalStyles = (0, _globalStyles.getGlobalStyles)(),
    fontSizeSchema = _getGlobalStyles.fontSize,
    gridSchema = _getGlobalStyles.grid;

var getHeaderFontSizeFromTag = function getHeaderFontSizeFromTag(factoryProps) {
  var factoryPropsTag = factoryProps.tag;

  var tag = factoryPropsTag || 'h1';
  var getHeaderFontSizeMemoized = function getHeaderFontSizeMemoized(props) {
    var display = props.display;

    var overrides = Object.assign({}, props, {
      fontSizeBase: display ? fontSizeSchema.display[tag] : fontSizeSchema[tag]
    });
    return (0, _textStyles.getFontSize)(overrides);
  };
  return getHeaderFontSizeMemoized;
};

var getHeaderFontWeight = function getHeaderFontWeight(props) {
  var display = props.display,
      fontWeight = props.fontWeight;

  var headerFontWeight = fontWeight !== _textStyles.defaultTextStylesBase.fontWeight ? fontWeight : undefined;
  var overrides = Object.assign({}, props, {
    fontWeight: headerFontWeight || (display ? '500' : headerFontWeight)
  });
  return (0, _textStyles.getFontWeight)(overrides);
};
var headerFactory = function headerFactory(factoryProps) {
  var tag = factoryProps.tag;

  var HeaderComponent = function HeaderComponent(_ref) {
    var children = _ref.children,
        props = _objectWithoutProperties(_ref, ['children']);

    return _react2.default.createElement(tag, (0, _componentHelpers.passThrough)(HeaderComponent, props), children);
  };
  HeaderComponent.propTypes = Object.assign({
    children: _propTypes2.default.any.isRequired
  }, _textStyles.typography.propTypes, {
    display: _propTypes2.default.bool
  });

  HeaderComponent.defaultProps = {
    display: false
  };

  var getHeaderFontSize = getHeaderFontSizeFromTag(factoryProps);
  return (0, _styledComponents2.default)(HeaderComponent)(_templateObject, _textStyles.getFontFamily, getHeaderFontSize, getHeaderFontWeight, _textStyles.getLetterSpacing, _textStyles.getLineHeight, _textStyles.getFontStyle, _textStyles.getColor, _textStyles.getTextAlign, _textStyles.getTextDecoration, gridSchema.gutter);
};

var Header = headerFactory({ tag: 'h1' });

Header.h1 = Header;
Header.h2 = headerFactory({ tag: 'h2' });
Header.h3 = headerFactory({ tag: 'h3' });
Header.h4 = headerFactory({ tag: 'h4' });
Header.h5 = headerFactory({ tag: 'h5' });
Header.h6 = headerFactory({ tag: 'h6' });

Header.propTypes = Object.assign({}, _textStyles.typography.propTypes);

exports.Header = Header;