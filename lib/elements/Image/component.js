'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImageComponent = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _componentHelpers = require('../../utils/componentHelpers');

var _reactImage = require('react-image');

var _reactImage2 = _interopRequireDefault(_reactImage);

var _styledHelpers = require('../../utils/styledHelpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var componentPropsToRemove = Object.assign({}, _styledHelpers.layoutProps.propTypes, _styledHelpers.spaceProps.propTypes);

var ImageComponent = function ImageComponent(_ref) {
  var alt = _ref.alt,
      props = _objectWithoutProperties(_ref, ['alt']);

  if (!alt) {
    // eslint-disable-next-line no-console
    console.error('🍇: alt property is required for Image'); // there is an explicit requirement scenerio to use console here.
  }
  return _react2.default.createElement(_reactImage2.default, _extends({ alt: alt }, (0, _componentHelpers.removeSomeProps)(props, Object.keys(componentPropsToRemove))));
};

exports.ImageComponent = ImageComponent;
ImageComponent.propTypes = {
  alt: _propTypes2.default.string
};

ImageComponent.defaultProps = {
  alt: ''
};