'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.controlStylesBase = exports.defaultControlStylesBase = undefined;

var _templateObject = _taggedTemplateLiteral([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _ControlLabel = require('./ControlLabel');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ControlGroup = _styledComponents2.default.div(_templateObject);
var AssistiveText = _styledComponents2.default.small(_templateObject);
var ValidationText = _styledComponents2.default.small(_templateObject);

var defaultControlStylesBase = exports.defaultControlStylesBase = {
  assistiveText: '',
  controlLabel: '',
  controlId: '',
  validationError: ''
};

var controlStylesBase = exports.controlStylesBase = function controlStylesBase(props) {
  var controlLabel = props.controlLabel,
      controlId = props.controlId,
      assistiveText = props.assistiveText,
      validationError = props.validationError;


  var displayAssistive = function displayAssistive(text, error, id) {
    if (!text && !error) {
      return null;
    } else if (text && !error) {
      return _react2.default.createElement(
        AssistiveText,
        { id: id + 'Help' },
        text
      );
    }
    return _react2.default.createElement(
      ValidationText,
      { id: id + 'Help' },
      error
    );
  };

  //   let overrides = null;
  //   if (!props || Array.isArray(props)) {
  //     overrides = defaultControlStylesBase;
  //   } else {
  //     overrides = {
  //       ...defaultControlStylesBase,
  //       ...props,
  //     };
  //   }

  return _react2.default.createElement(
    ControlGroup,
    null,
    _react2.default.createElement(
      _ControlLabel.ControlLabel,
      { 'for': controlId },
      controlLabel
    ),
    displayAssistive(assistiveText, validationError, controlId)
  );
};