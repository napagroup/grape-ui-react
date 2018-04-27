'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  background: #1FB6FF;\n  border: none;\n  border-radius: 2px;\n  color: #FFFFFF;\n  cursor: pointer;\n  display: inline-block;\n  font-size: 16px;\n  line-height: 40px;\n  font-weight: 200;\n  margin: 8px 0;\n  outline: none;\n  padding: 0 12px;\n  text-transform: uppercase;\n  transition: all 300ms ease;\n  &:hover {\n    background: #009EEB;\n  }\n'], ['\n  background: #1FB6FF;\n  border: none;\n  border-radius: 2px;\n  color: #FFFFFF;\n  cursor: pointer;\n  display: inline-block;\n  font-size: 16px;\n  line-height: 40px;\n  font-weight: 200;\n  margin: 8px 0;\n  outline: none;\n  padding: 0 12px;\n  text-transform: uppercase;\n  transition: all 300ms ease;\n  &:hover {\n    background: #009EEB;\n  }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Button = exports.Button = _styledComponents2.default.button(_templateObject);