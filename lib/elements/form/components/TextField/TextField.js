'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextField = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ControlGroup = require('../../ControlGroup');

var _componentHelpers = require('../../../../utils/componentHelpers');

var _ = require('.');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextField = exports.TextField = function TextField(props) {
  var overrides = Object.assign({}, props);
  var child = _react2.default.createElement(_.TextFieldControl, (0, _componentHelpers.passThrough)(TextField, overrides));
  console.log('TextField - child', child);
  var ProtoTextField = (0, _ControlGroup.withControlGroup)(child, overrides);
  return _react2.default.createElement(ProtoTextField, null);
};
// import styled from 'styled-components';


TextField.propTypes = {
  assistiveText: _propTypes2.default.string,
  controlId: _propTypes2.default.string.isRequired,
  controlLabel: _propTypes2.default.string.isRequired,
  validationError: _propTypes2.default.string
};

TextField.defaultProps = {
  assistiveText: '',
  validationError: ''
};