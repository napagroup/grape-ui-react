'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Image = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'], ['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledSystem = require('styled-system');

var _component = require('./component');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Image = exports.Image = (0, _styledComponents2.default)(_component.ImageComponent)(_templateObject, _styledSystem.width, _styledSystem.display, _styledSystem.maxWidth, _styledSystem.minWidth, _styledSystem.height, _styledSystem.maxHeight, _styledSystem.minHeight);

Image.propTypes = Object.assign({
  alt: _propTypes2.default.string,
  maxWidth: _propTypes2.default.string,
  w: _propTypes2.default.string
}, _styledSystem.width.propTypes, _styledSystem.display.propTypes, _styledSystem.maxWidth.propTypes, _styledSystem.minWidth.propTypes, _styledSystem.height.propTypes, _styledSystem.maxHeight.propTypes, _styledSystem.minHeight.propTypes);

Image.defaultProps = {
  alt: '',
  maxWidth: '100%',
  w: '100%'
};