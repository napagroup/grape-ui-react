'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Form = undefined;

var _templateObject = _taggedTemplateLiteral([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _componentHelpers = require('../../utils/componentHelpers');

var _decorators = require('../../decorators');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var getFormInstance = function getFormInstance(props) {
  return _styledComponents2.default.form(_templateObject);
};

var Form = exports.Form = function Form(props) {
  var overrides = Object.assign({}, props);
  var ProtoForm = (0, _decorators.withStyledSystem)(getFormInstance(props), overrides);
  var propsToPassThru = Object.assign({}, (0, _componentHelpers.passThrough)(Form, props));
  return _react2.default.createElement(ProtoForm, propsToPassThru);
};

Form.propTypes = {
  class: _propTypes2.default.string
};

Form.defaultProps = {
  class: ''
};