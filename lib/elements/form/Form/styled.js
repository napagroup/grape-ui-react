"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Form = undefined;

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require("styled-system");

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _component = require("./component");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Form = (0, _styledComponents2["default"])(_component.FormComponent)(_templateObject(), _styledSystem.flexbox, _styledSystem.position, _styledSystem.layout, _styledSystem.space);
Form.propTypes = {
  /** Define which style of form controls should be used
  * @see See [Material Design/Components/Text Fields/Usage](https://material.io/components/text-fields/#usage) for more on these styles. */
  formStyle: _propTypes2["default"].string
};
Form.defaultProps = {
  display: 'flex',
  flexDirection: 'column',
  formStyle: ''
};
/** @component */

exports.Form = Form;