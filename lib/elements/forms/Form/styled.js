"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.Form = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Hideable = require("../../../elements/utils/Hideable");

var _component = require("./component");

function _templateObject() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

const Form = (0, _styledComponents.default)((0, _Hideable.withHideable)(_component.FormComponent))(_templateObject(), _styledSystem.flexbox, _styledSystem.position, _styledSystem.layout, _styledSystem.space);
exports.Form = Form;
Form.propTypes = {
  /** Define which style of form controls should be used
  * @see See [Material Design/Components/Text Fields/Usage](https://material.io/components/text-fields/#usage) for more on these styles. */
  formStyle: _propTypes.default.string,

  /** Hides component */
  isHidden: _propTypes.default.bool
};
Form.defaultProps = {
  display: 'flex',
  flexDirection: 'column',
  formStyle: '',
  isHidden: false
};
/** @component */