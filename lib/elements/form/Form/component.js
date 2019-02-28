'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormComponent = exports.applyFormStyleToChild = undefined;

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
var applyFormStyleToChild = exports.applyFormStyleToChild = function applyFormStyleToChild(child, formStylefromParent) {
  var formStyle = child.props.formStyle;

  var output = void 0;
  // Only TextField will try to apply form style
  if (formStyle || child.type.name !== 'TextField') {
    output = child;
  } else {
    output = _react2.default.cloneElement(child, { formStyle: formStylefromParent });
  }
  return output;
};

var FormComponent = function FormComponent(_ref) {
  var children = _ref.children,
      formStyle = _ref.formStyle,
      props = _objectWithoutProperties(_ref, ['children', 'formStyle']);

  var output = null;
  if (!formStyle) {
    output = _react2.default.createElement(
      'form',
      (0, _componentHelpers.removeSomeProps)(props, Object.keys(formComponentPropsToRemove)),
      ' ',
      children,
      ' '
    );
  } else {
    var childrenWithProps = _react2.default.Children.map(children, function (child) {
      return applyFormStyleToChild(child, formStyle);
    });
    output = _react2.default.createElement(
      'form',
      (0, _componentHelpers.removeSomeProps)(props, Object.keys(formComponentPropsToRemove)),
      ' ',
      childrenWithProps,
      ' '
    );
  }
  return output;
};
exports.FormComponent = FormComponent;
FormComponent.propTypes = {
  children: _propTypes2.default.any,
  formStyle: _propTypes2.default.string
};

FormComponent.defaultProps = {
  children: null,
  formStyle: ''
};