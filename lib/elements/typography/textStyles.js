'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.textStylesBase = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  line-height: 1.5;\n  ', '\n'], ['\n  line-height: 1.5;\n  ', '\n']);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var textStylesBase = exports.textStylesBase = (0, _styledComponents.css)(_templateObject, italic ? 'text-style: italic;' : '');

textStylesBase.propTypes = {
  italic: _propTypes2.default.bool
};

textStylesBase.defaultProps = {
  italic: false
};