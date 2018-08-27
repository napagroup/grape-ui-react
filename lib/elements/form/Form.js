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

var _styledSystem = require('styled-system');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Form = exports.Form = function Form(props) {
  var formInline = props.formInline;

  var overrides = Object.assign({}, props, {
    width: !formInline ? '' : 'auto',
    display: !formInline ? '' : 'flex'

  });
  var ProtoForm = (0, _decorators.withStyledSystem)(_styledComponents2.default.form(_templateObject), overrides);
  var propsToPassThru = Object.assign({}, (0, _componentHelpers.passThrough)(Form, overrides));
  return _react2.default.createElement(ProtoForm, propsToPassThru);
};

Form.propTypes = Object.assign({
  formInline: _propTypes2.default.bool
}, _styledSystem.width.propTypes, _styledSystem.display.propTypes);

Form.defaultProps = {
  formInline: false
};