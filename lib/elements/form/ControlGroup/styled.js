'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ControlGroup = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  position: relative;\n  ', '\n  ', '\n  width: 100%;\n'], ['\n  position: relative;\n  ', '\n  ', '\n  width: 100%;\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

var _componentHelpers = require('../../../utils/componentHelpers');

var _component = require('./component');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var bgColor = function bgColor(props) {
  return 'background-color: ' + (0, _componentHelpers.resolveColor)(props.bgColor) + ';';
};

var ControlGroup = exports.ControlGroup = (0, _styledComponents2.default)(_component.ControlGroupComponent)(_templateObject, bgColor, _styledSystem.space);
ControlGroup.propTypes = Object.assign({}, _styledSystem.space.propTypes);