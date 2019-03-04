'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ControlGroup = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  position: relative;\n  ', '\n  ', '\n  width: 100%;\n'], ['\n  position: relative;\n  ', '\n  ', '\n  width: 100%;\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

var _styledHelpers = require('../../../utils/styledHelpers');

var _component = require('./component');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ControlGroup = exports.ControlGroup = (0, _styledComponents2.default)(_component.ControlGroupComponent)(_templateObject, _styledHelpers.colorCore, _styledSystem.space);
ControlGroup.propTypes = Object.assign({}, _styledHelpers.typography.propTypes);