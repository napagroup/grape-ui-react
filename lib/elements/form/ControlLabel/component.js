'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ControlLabelComponent = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _componentHelpers = require('../../../utils/componentHelpers');

var _baseControlStyle = require('../../../elements/form/ControlGroup/baseControlStyle');

var _textStyles = require('../../../elements/typography/textStyles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var ControlLabelComponent = function ControlLabelComponent(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ['children']);

  return (
    // eslint-disable-next-line jsx-a11y/label-has-for
    _react2.default.createElement(
      'label',
      (0, _componentHelpers.passThrough)(ControlLabelComponent, props),
      children
    )
  );
};
exports.ControlLabelComponent = ControlLabelComponent;
ControlLabelComponent.propTypes = Object.assign({
  activeColor: _propTypes2.default.string,
  bgColor: _propTypes2.default.string,
  disabled: _propTypes2.default.bool
}, _textStyles.typography.propTypes, {
  validationError: _propTypes2.default.string
});

ControlLabelComponent.defaultProps = {
  activeColor: _baseControlStyle.defaultControlStylesBase.activeColor,
  bgColor: _baseControlStyle.defaultControlStylesBase.bgColor,
  disabled: false,
  validationError: ''
};