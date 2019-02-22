'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormComponent = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _componentHelpers = require('../../../utils/componentHelpers');

var _styledSystem = require('styled-system');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var formComponentPropsToRemove = Object.assign({}, _styledSystem.width.propTypes, _styledSystem.display.propTypes, {
  formInline: false
});
var FormComponent = function FormComponent(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ['children']);

  return _react2.default.createElement(
    'form',
    (0, _componentHelpers.removeSomeProps)(props, Object.keys(formComponentPropsToRemove)),
    children
  );
};
exports.FormComponent = FormComponent;
FormComponent.propTypes = {
  children: _propTypes2.default.any
};

FormComponent.defaultProps = {
  children: null
};