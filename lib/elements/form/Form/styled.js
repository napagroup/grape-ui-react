'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Form = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'], ['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

var _component = require('./component');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Form = exports.Form = (0, _styledComponents2.default)(_component.FormComponent)(_templateObject, _styledSystem.alignContent, _styledSystem.alignItems, _styledSystem.alignSelf, _styledSystem.bottom, _styledSystem.display, _styledSystem.flexBasis, _styledSystem.flexDirection, _styledSystem.flexWrap, _styledSystem.height, _styledSystem.justifyContent, _styledSystem.left, _styledSystem.maxHeight, _styledSystem.maxWidth, _styledSystem.minHeight, _styledSystem.minWidth, _styledSystem.position, _styledSystem.ratio, _styledSystem.right, _styledSystem.size, _styledSystem.top, _styledSystem.space, _styledSystem.width, _styledSystem.zIndex);

Form.propTypes = Object.assign({
  formStyle: _propTypes2.default.string
}, _styledSystem.width.propTypes, _styledSystem.display.propTypes);

Form.defaultProps = {
  formStyle: ''
};