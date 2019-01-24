'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Flex = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'], ['\n  display: flex;\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Flex = exports.Flex = _styledComponents2.default.div(_templateObject, _styledSystem.space, _styledSystem.display, _styledSystem.width, _styledSystem.height, _styledSystem.maxHeight, _styledSystem.minHeight, _styledSystem.maxWidth, _styledSystem.minWidth, _styledSystem.position, _styledSystem.size, _styledSystem.ratio, _styledSystem.zIndex, _styledSystem.top, _styledSystem.right, _styledSystem.bottom, _styledSystem.left, _styledSystem.justifyContent, _styledSystem.alignContent, _styledSystem.alignItems, _styledSystem.alignSelf, _styledSystem.flexBasis, _styledSystem.flexDirection, _styledSystem.flexWrap);
Flex.propTypes = Object.assign({}, _styledSystem.height.propTypes, _styledSystem.maxHeight.propTypes, _styledSystem.maxWidth.propTypes, _styledSystem.minHeight.propTypes, _styledSystem.minWidth.propTypes, _styledSystem.size.propTypes, _styledSystem.width.propTypes);