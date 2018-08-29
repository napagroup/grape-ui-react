'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ControlGroupBase = undefined;

var _templateObject = _taggedTemplateLiteral([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _ControlLabel = require('./ControlLabel');

var _AssistiveText = require('./AssistiveText');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ControlGroup = _styledComponents2.default.div(_templateObject);

var ControlGroupBase = exports.ControlGroupBase = function ControlGroupBase(props) {
  var controlLabel = props.controlLabel,
      controlId = props.controlId,
      assistiveText = props.assistiveText,
      validationError = props.validationError,
      children = props.children;


  var displayAssistive = function displayAssistive(text, error, id) {
    if (!text && !error) {
      return null;
    } else if (text && !error) {
      return _react2.default.createElement(
        _AssistiveText.AssistiveText,
        { id: id + 'Help' },
        text
      );
    }
    return _react2.default.createElement(
      _AssistiveText.AssistiveText,
      { color: 'brandDanger', id: id + 'Error' },
      error
    );
  };

  return _react2.default.createElement(
    ControlGroup,
    null,
    _react2.default.createElement(
      _ControlLabel.ControlLabel,
      { htmlFor: controlId },
      controlLabel
    ),
    children,
    displayAssistive(assistiveText, validationError, controlId)
  );
};

ControlGroupBase.propTypes = {
  assistiveText: _propTypes2.default.string,
  children: _propTypes2.default.any.isRequired,
  controlId: _propTypes2.default.string.isRequired,
  controlLabel: _propTypes2.default.string.isRequired,
  validationError: _propTypes2.default.string
};

ControlGroupBase.defaultProps = {
  assistiveText: '',
  validationError: ''
};