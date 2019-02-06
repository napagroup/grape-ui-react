'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.List = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    margin: 0 0 ', ';\n    ', '\n    ', '\n    ', '\n    '], ['\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    margin: 0 0 ', ';\n    ', '\n    ', '\n    ', '\n    ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _globalStyles = require('../../../global-styles');

var _utils = require('../utils');

var _textStyles = require('../textStyles');

var _componentHelpers = require('../../../utils/componentHelpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var _getGlobalStyles = (0, _globalStyles.getGlobalStyles)(),
    gridSchema = _getGlobalStyles.grid;

var getInLineStyles = function getInLineStyles(props) {
  var inlineStyles = '\n    > li {\n      display: inline-block;\n      &:not(:last-child) {\n        margin-right: ' + (0, _utils.getScaledSize)(gridSchema.gutter, 0.5) + ';\n      }\n    }\n  ';
  return '' + (props.inline ? inlineStyles : '');
};

var getPaddingLeft = function getPaddingLeft(props) {
  return 'padding-left:  ' + (props.unstyled || props.inline ? '0' : '2.5rem') + ';';
};
var getListStyle = function getListStyle(props) {
  return '' + (props.unstyled ? '> li { list-style: none; }' : '');
};

var listFactory = function listFactory(factoryProps) {
  var tag = factoryProps.tag;

  var ListComponent = function ListComponent(_ref) {
    var children = _ref.children,
        props = _objectWithoutProperties(_ref, ['children']);

    return _react2.default.createElement(tag, (0, _componentHelpers.passThrough)(ListComponent, props), children);
  };
  ListComponent.propTypes = Object.assign({
    children: _propTypes2.default.any.isRequired,
    inline: _propTypes2.default.bool
  }, _textStyles.typography.propTypes, {
    unstyled: _propTypes2.default.bool
  });
  ListComponent.defaultProps = {
    inline: false,
    unstyled: false
  };

  return (0, _styledComponents2.default)(ListComponent)(_templateObject, _textStyles.getFontFamily, _textStyles.getFontSize, _textStyles.getFontWeight, _textStyles.getLetterSpacing, _textStyles.getLineHeight, _textStyles.getFontStyle, _textStyles.getColor, _textStyles.getTextAlign, _textStyles.getTextDecoration, gridSchema.gutter, getPaddingLeft, getListStyle, getInLineStyles);
};

var List = listFactory({ tag: 'ul' });
List.ul = List;
List.ol = listFactory({ tag: 'ol' });
List.propTypes = Object.assign({
  inline: _propTypes2.default.bool
}, _textStyles.typography.propTypes, {
  unstyled: _propTypes2.default.bool
});
exports.List = List;