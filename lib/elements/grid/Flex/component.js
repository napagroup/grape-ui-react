'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FlexComponent = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledSystem = require('styled-system');

var _componentHelpers = require('../../../utils/componentHelpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propsToTrim = Object.assign({}, _styledSystem.alignContent.propTypes, _styledSystem.alignItems.propTypes, _styledSystem.alignSelf.propTypes, _styledSystem.bottom.propTypes, _styledSystem.display.propTypes, _styledSystem.flexBasis.propTypes, _styledSystem.flexDirection.propTypes, _styledSystem.flexWrap.propTypes, _styledSystem.height.propTypes, _styledSystem.justifyContent.propTypes, _styledSystem.left.propTypes, _styledSystem.maxHeight.propTypes, _styledSystem.maxWidth.propTypes, _styledSystem.minHeight.propTypes, _styledSystem.minWidth.propTypes, _styledSystem.position.propTypes, _styledSystem.ratio.propTypes, _styledSystem.right.propTypes, _styledSystem.size.propTypes, _styledSystem.space.propTypes, _styledSystem.top.propTypes, _styledSystem.width.propTypes, _styledSystem.zIndex.propTypes);

var FlexComponent = function FlexComponent(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ['children']);

  return _react2.default.createElement(
    'div',
    (0, _componentHelpers.removeSomeProps)(props, Object.keys(propsToTrim)),
    children
  );
};

exports.FlexComponent = FlexComponent;
FlexComponent.propTypes = {
  children: _propTypes2.default.any
};

FlexComponent.defaultProps = {
  children: null
};