'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AssistiveTextComponent = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _textStyles = require('../../../elements/typography/textStyles');

var _componentHelpers = require('../../../utils/componentHelpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var AssistiveTextComponent = function AssistiveTextComponent(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ['children']);

  return _react2.default.createElement(
    'div',
    (0, _componentHelpers.passThrough)(AssistiveTextComponent, props),
    children
  );
};
exports.AssistiveTextComponent = AssistiveTextComponent;
AssistiveTextComponent.propTypes = Object.assign({}, _textStyles.typography.propTypes);

AssistiveTextComponent.defaultProps = {
  color: 'gray'
};