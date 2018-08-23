'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Image = undefined;

var _templateObject = _taggedTemplateLiteral([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactImage = require('react-image');

var _reactImage2 = _interopRequireDefault(_reactImage);

var _componentHelpers = require('../../utils/componentHelpers');

var _styledSystem = require('styled-system');

var _decorators = require('../../decorators');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var getImageInstance = function getImageInstance(props) {
  var alt = props.alt;

  if (!alt) {
    // eslint-disable-next-line no-console
    console.error('🍇: alt property is required for Image'); // there is an explicit requirement scenerio to use console here.
  }
  return (0, _styledComponents2.default)(_reactImage2.default)(_templateObject);
};

var Image = exports.Image = function Image(props) {
  var alt = props.alt;

  var overrides = Object.assign({}, props);
  var ProtoImage = (0, _decorators.withStyledSystem)(getImageInstance(props), overrides);
  var propsToPassThru = Object.assign({}, (0, _componentHelpers.passThrough)(Image, props), {
    alt: alt
  });
  return _react2.default.createElement(ProtoImage, propsToPassThru);
};

Image.propTypes = Object.assign({
  alt: _propTypes2.default.string,
  maxWidth: _propTypes2.default.string,
  w: _propTypes2.default.string
}, _styledSystem.display.propTypes, _styledSystem.height.propTypes, _styledSystem.maxHeight.propTypes, _styledSystem.minHeight.propTypes, _styledSystem.width.propTypes, _styledSystem.maxWidth.propTypes, _styledSystem.minWidth.propTypes);

Image.defaultProps = {
  alt: '',
  w: '100%',
  maxWidth: '100%'
};