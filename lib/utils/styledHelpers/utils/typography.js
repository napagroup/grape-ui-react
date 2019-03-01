'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.typography = undefined;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledSystem = require('styled-system');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var typography = exports.typography = {
  propTypes: Object.assign({}, _styledSystem.color.propTypes, _styledSystem.fontFamily.propTypes, _styledSystem.fontWeight.propTypes, _styledSystem.fontSize.propTypes, {
    italic: _propTypes2.default.bool,
    kerning: _propTypes2.default.string
  }, _styledSystem.lineHeight.propTypes, _styledSystem.letterSpacing.propTypes, {
    lg: _propTypes2.default.bool,
    sm: _propTypes2.default.bool,
    textAlign: _propTypes2.default.string,
    textDecoration: _propTypes2.default.string
  })
};