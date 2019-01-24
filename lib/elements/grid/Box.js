'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Box = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'], ['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Box = exports.Box = _styledComponents2.default.div(_templateObject, _styledSystem.space, _styledSystem.display, _styledSystem.width, _styledSystem.height, _styledSystem.maxHeight, _styledSystem.minHeight, _styledSystem.maxWidth, _styledSystem.minWidth, _styledSystem.position, _styledSystem.size, _styledSystem.ratio, _styledSystem.zIndex, _styledSystem.top, _styledSystem.right, _styledSystem.bottom, _styledSystem.left);

Box.propTypes = Object.assign({}, _styledSystem.display.propTypes, _styledSystem.height.propTypes, _styledSystem.maxHeight.propTypes, _styledSystem.minHeight.propTypes, _styledSystem.width.propTypes, _styledSystem.maxWidth.propTypes, _styledSystem.minWidth.propTypes, _styledSystem.position.propTypes, _styledSystem.size.propTypes, _styledSystem.ratio.propTypes, _styledSystem.zIndex.propTypes, _styledSystem.top.propTypes, _styledSystem.right.propTypes, _styledSystem.bottom.propTypes, _styledSystem.left.propTypes);