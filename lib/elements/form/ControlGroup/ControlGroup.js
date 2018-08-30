'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ControlGroupBase = undefined;

var _templateObject = _taggedTemplateLiteral([' ', ' position: relative; background-color: white;'], [' ', ' position: relative; background-color: white;']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _ControlLabel = require('./ControlLabel');

var _AssistiveText = require('./AssistiveText');

var _styledSystem = require('styled-system');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var ControlGroup = function ControlGroup(props) {
  var controlLabel = props.controlLabel,
      controlId = props.controlId,
      assistiveText = props.assistiveText,
      validationError = props.validationError,
      children = props.children,
      otherProps = _objectWithoutProperties(props, ['controlLabel', 'controlId', 'assistiveText', 'validationError', 'children']);

  var propsPass = {
    controlLabel: controlLabel, controlId: controlId, assistiveText: assistiveText, validationError: validationError, children: children
  };

  var ProtoControlGroup = _styledComponents2.default.div(_templateObject, otherProps);
  return _react2.default.createElement(ProtoControlGroup, propsPass);
};

ControlGroup.propTypes = Object.assign({}, _styledSystem.space.propTypes);

var ControlGroupBase = function ControlGroupBase(props) {
  var controlLabel = props.controlLabel,
      controlId = props.controlId,
      assistiveText = props.assistiveText,
      validationError = props.validationError,
      children = props.children,
      otherProps = _objectWithoutProperties(props, ['controlLabel', 'controlId', 'assistiveText', 'validationError', 'children']);

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
    otherProps,
    _react2.default.createElement(
      _ControlLabel.ControlLabel,
      { htmlFor: controlId },
      controlLabel
    ),
    children,
    displayAssistive(assistiveText, validationError, controlId)
  );
};

exports.ControlGroupBase = ControlGroupBase;
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