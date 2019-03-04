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

var _styledHelpers = require('../../../utils/styledHelpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propsToTrim = Object.assign({}, _styledHelpers.typography.propTypes, {
  activeColor: '',
  disabled: false,
  isRelative: false,
  validationError: ''
});
var ControlLabelComponent = function ControlLabelComponent(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ['children']);

  return (
    /* eslint-disable jsx-a11y/label-has-associated-control */
    // eslint-disable-next-line jsx-a11y/label-has-for
    _react2.default.createElement(
      'label',
      (0, _componentHelpers.removeSomeProps)(props, Object.keys(propsToTrim)),
      children
    )
  );
};
exports.ControlLabelComponent = ControlLabelComponent;
ControlLabelComponent.propTypes = {
  children: _propTypes2.default.any
};

ControlLabelComponent.defaultProps = {
  children: null
};