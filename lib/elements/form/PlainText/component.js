'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PlainTextComponent = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _componentHelpers = require('../../../utils/componentHelpers');

var _baseControlStyle = require('../../../elements/form/ControlGroup/baseControlStyle');

var _textStyles = require('../../../elements/typography/textStyles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getDisplayValue = function getDisplayValue(props) {
  var value = props.value;

  if (!!value && !!value.label) {
    return value.label;
  }if (typeof value === 'string') {
    return value;
  }
  return '';
};

var PlainTextComponent = exports.PlainTextComponent = function PlainTextComponent(props) {
  var displayString = getDisplayValue(props);
  return _react2.default.createElement(
    'div',
    (0, _componentHelpers.passThrough)(PlainTextComponent, props),
    displayString
  );
};

PlainTextComponent.propTypes = Object.assign({}, _baseControlStyle.control.propTypes, _textStyles.typography.propTypes, {
  value: _propTypes2.default.any
});

PlainTextComponent.defaultProps = {
  value: null
};