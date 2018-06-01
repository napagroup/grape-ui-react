'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Link = undefined;

var _templateObject = _taggedTemplateLiteral(['', ''], ['', '']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _textStyles = require('./textStyles');

var _componentHelpers = require('../../utils/componentHelpers');

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var getLinkInstance = function getLinkInstance(props, css) {
  var to = props.to;

  return to ? (0, _styledComponents2.default)(_reactRouterDom.Link)(_templateObject, css) : _styledComponents2.default.a(_templateObject, css);
};

var LinkFactory = function LinkFactory(props) {
  var color = props.color,
      hoverColor = props.hoverColor,
      to = props.to;


  var overrides = Object.assign({}, props, {
    color: color || 'brandLink',
    hoverColor: hoverColor || 'brandLinkHover'
  });
  var baseStyles = (0, _textStyles.textStylesBase)(overrides);
  var css = '\n    ' + baseStyles + '\n    text-decoration: none;\n    &:hover,\n    &:active {\n      color: ' + (0, _componentHelpers.resolveColor)(overrides.hoverColor) + ';\n    }\n  ';
  var Primitive = getLinkInstance(props, css);
  var passThroughProps = (0, _componentHelpers.passThrough)(LinkFactory, props);
  if (to) {
    // reintroduce to prop back; attribute is needed for React Router Link
    passThroughProps.to = to;
  }
  return _react2.default.createElement(Primitive, passThroughProps);
};

LinkFactory.propTypes = {
  color: _propTypes2.default.string,
  hoverColor: _propTypes2.default.string,
  to: _propTypes2.default.string
};

LinkFactory.defaultProps = {
  color: 'brandLink',
  hoverColor: 'brandLinkHover',
  to: ''
};

var Link = function Link(props) {
  return LinkFactory(props);
};

exports.Link = Link;