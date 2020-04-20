"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.Form = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _component = require("./component");

const Form = (0, _styledComponents.default)(_component.FormComponent)`
  ${_styledSystem.flexbox}
  ${_styledSystem.position}
  ${_styledSystem.layout}
  ${_styledSystem.space}
`;
exports.Form = Form;
Form.propTypes = {
  /** Define which style of form controls should be used
  * @see See [Material Design/Components/Text Fields/Usage](https://material.io/components/text-fields/#usage) for more on these styles. */
  formStyle: _propTypes.default.string
};
Form.defaultProps = {
  display: 'flex',
  flexDirection: 'column',
  formStyle: ''
};
/** @component */