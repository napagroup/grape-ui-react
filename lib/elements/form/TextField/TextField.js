'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextField = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ControlGroup = require('../../../elements/form/ControlGroup/ControlGroup');

var _componentHelpers = require('../../../utils/componentHelpers');

var _TextFieldComponent = require('./TextFieldComponent');

var _styledSystem = require('styled-system');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var TextField = function TextField(props) {
  var activeColor = props.activeColor,
      controlId = props.controlId,
      assistiveText = props.assistiveText,
      controlLabel = props.controlLabel,
      validationError = props.validationError,
      otherProps = _objectWithoutProperties(props, ['activeColor', 'controlId', 'assistiveText', 'controlLabel', 'validationError']);

  var preSpaceProps = Object.assign({ pb: '1' }, otherProps);
  var spaceProps = Object.assign({}, (0, _styledSystem.space)(preSpaceProps));
  var otherWithoutSpaceProps = (0, _componentHelpers.removeSomeProps)(otherProps, spaceProps);
  var childProps = Object.assign({ id: controlId }, (0, _componentHelpers.passThrough)(TextField, otherWithoutSpaceProps));
  return _react2.default.createElement(
    _ControlGroup.ControlGroupBase,
    _extends({
      activeColor: activeColor,
      assistiveText: assistiveText,
      controlId: controlId,
      controlLabel: controlLabel,
      validationError: validationError
    }, spaceProps),
    _react2.default.createElement(_TextFieldComponent.TextFieldComponent, childProps)
  );
};

exports.TextField = TextField;
TextField.propTypes = Object.assign({
  activeColor: _propTypes2.default.string,
  assistiveText: _propTypes2.default.string,
  controlId: _propTypes2.default.string.isRequired,
  controlLabel: _propTypes2.default.string.isRequired,
  validationError: _propTypes2.default.string
}, _styledSystem.space.propTypes);

TextField.defaultProps = {
  activeColor: 'blue',
  assistiveText: '',
  validationError: ''
};