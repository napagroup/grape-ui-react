'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Paragraph = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    ', '\n    margin: 0 0 ', ';\n  '], ['\n    ', '\n    margin: 0 0 ', ';\n  ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _textStyles = require('./textStyles');

var _grid = require('../../assets/json/grid.json');

var gridSchema = _interopRequireWildcard(_grid);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Paragraph = function Paragraph(props) {
  var lead = props.lead,
      otherProps = _objectWithoutProperties(props, ['lead']);

  var leadStyles = null;
  if (lead) {
    leadStyles = {
      fontWeight: '300',
      lg: true
    };
  };
  var overrides = Object.assign({}, otherProps, leadStyles);
  var actualBase = (0, _textStyles.textStylesBase)(overrides);
  var ProtoParagraph = _styledComponents2.default.p(_templateObject, actualBase, gridSchema.gutter);
  return _react2.default.createElement(ProtoParagraph, otherProps);
};
exports.Paragraph = Paragraph;