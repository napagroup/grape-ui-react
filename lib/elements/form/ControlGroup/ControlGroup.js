'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ControlGroupBase = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    ', '\n    ', '\n  '], ['\n    ', '\n    ', '\n  ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _ControlLabel = require('./ControlLabel');

var _AssistiveText = require('./AssistiveText');

var _styledSystem = require('styled-system');

var _baseControlStyle = require('./baseControlStyle');

var _componentHelpers = require('../../../utils/componentHelpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var getBgColor = function getBgColor(props) {
  var bgColor = props.bgColor;

  if (!bgColor) {
    return (0, _componentHelpers.resolveColor)(_baseControlStyle.defaultControlStylesBase.bgColor);
  }
  return (0, _componentHelpers.resolveColor)(bgColor);
};

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
  var stylesControlGroup = '\n    position: relative;\n    background-color: ' + getBgColor(props) + ';\n    width: 100%;\n  ';
  var ProtoControlGroup = _styledComponents2.default.div(_templateObject, otherProps, stylesControlGroup);
  return _react2.default.createElement(ProtoControlGroup, propsPass);
};

ControlGroup.propTypes = Object.assign({}, _styledSystem.space.propTypes);

var ControlGroupBase = function ControlGroupBase(props) {
  var activeColor = props.activeColor,
      assistiveText = props.assistiveText,
      controlLabel = props.controlLabel,
      controlId = props.controlId,
      validationError = props.validationError,
      children = props.children,
      disabled = props.disabled,
      otherProps = _objectWithoutProperties(props, ['activeColor', 'assistiveText', 'controlLabel', 'controlId', 'validationError', 'children', 'disabled']);

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
    children,
    _react2.default.createElement(
      _ControlLabel.ControlLabel,
      {
        activeColor: activeColor,
        bgColor: getBgColor(props),
        disabled: disabled,
        htmlFor: controlId,
        validationError: validationError
      },
      controlLabel
    ),
    displayAssistive(assistiveText, validationError, controlId)
  );
};

exports.ControlGroupBase = ControlGroupBase;
ControlGroupBase.propTypes = {
  activeColor: _propTypes2.default.string,
  assistiveText: _propTypes2.default.string,
  bgColor: _propTypes2.default.string,
  children: _propTypes2.default.any.isRequired,
  controlId: _propTypes2.default.string.isRequired,
  controlLabel: _propTypes2.default.string.isRequired,
  disabled: _propTypes2.default.bool,
  validationError: _propTypes2.default.string
};

ControlGroupBase.defaultProps = {
  activeColor: _baseControlStyle.defaultControlStylesBase.activeColor,
  assistiveText: '',
  bgColor: _baseControlStyle.defaultControlStylesBase.bgColor,
  disabled: false,
  validationError: ''
};